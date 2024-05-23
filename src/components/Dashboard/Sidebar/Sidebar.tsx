import { Box, Stack,  Typography } from '@mui/material';
import List from '@mui/material/List';
import Image from 'next/image';

import { UserRole } from '@/types';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { drawerItems } from '@/utils/drawerItem';
import SidebarItem from './SidebarItem';
import { getUserInfo } from '@/services/auth.service';
const SideBar = () => {

    const [userRole,setUserRole]=useState("")

    useEffect(()=>{
        const user=getUserInfo();
        const role=user?.role;
        setUserRole(role as string)
    },[])
  
//    console.log(userRole);
    return (
        <Box>
            <Stack direction="row" justifyContent="center" alignItems="center" gap="5px" sx={{py:1,my:1}} component={Link} href='/'>
                {/* <Box>
                    <Image src={assets.svgs.logo} width={40} height={40} alt='logo'/>
                </Box> */}
                <Box>
                    <Typography variant='h6' component="h6" fontWeight={600}>
                            Travel YYT
                    </Typography>
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