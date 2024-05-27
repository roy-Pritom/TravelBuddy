import { Box, Stack,  Typography } from '@mui/material';
import List from '@mui/material/List';
import Image from 'next/image';

import { TUser, UserRole } from '@/types';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { drawerItems } from '@/utils/drawerItem';
import SidebarItem from './SidebarItem';
import { getUserInfo } from '@/services/auth.service';
const SideBar = () => {

    const [userRole,setUserRole]=useState("")

    useEffect(()=>{
        const user=getUserInfo() as TUser;
        const role=user?.role;
        setUserRole(role as string)
    },[])
  
//    console.log(userRole);
    return (
        <Box  sx={{backgroundColor:"#FFFFFF",height:"100%"}}>
            <Stack direction="row" justifyContent="center" alignItems="center" gap="5px" sx={{py:1,my:1}} component={Link} href='/'>
                <Box>
                   <Stack direction="row" justifyContent="center" alignItems="center" gap={2}>
                   <Image alt='logo' src='/travel.png' width={40} height={40}/>
                    <Typography variant='h6' component="h6" fontWeight={600}>
                            WanderMate
                    </Typography>
                   </Stack>
                </Box>
            </Stack>
            <List>
                {drawerItems(userRole as UserRole).map((item, index) => (
                 <SidebarItem item={item} key={index}/>
                ))}
            </List>
        </Box>
    );
};

export default SideBar;