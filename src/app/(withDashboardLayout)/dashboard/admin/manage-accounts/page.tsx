"use client"
import { useGetAllUserQuery } from '@/redux/api/user/userApi';
import { Box } from '@mui/material';
import {DataGrid,GridColDef} from '@mui/x-data-grid';
import Image from 'next/image';


const ManageAccountPage = () => {
    const {data:users,isLoading}=useGetAllUserQuery({});
console.log(users);
    const columns:GridColDef[]=[
        // {
        //   field:"photo",
        //   headerName:'Photo',
        //   flex:1,
        //   renderCell:({row})=>{
        //     return (
        //         <Box>
        //             <Image src={row.photo} width={200} height={200} alt='icon'/>
        //         </Box>
        //     )
        //   }
        // },
          {
            field:"name",
            headerName:'Name',
            flex:1,
        
          },
          {
            field:"email",
            headerName:'Email',
            flex:1,
        
          },
          {
            field:"role",
            headerName:'Role',
            flex:1,
        
          },
     
       
      
        
        ]
    return (
        <div>
            <p>Manage</p>
            {
            !isLoading ? 
            (
                <Box mt={2}>
                <DataGrid
                rows={users || []}
                columns={columns}
                hideFooter={true}
                getRowId={(row)=>row.id}
              
                />
                </Box>
            )
            :
            (
                <div className="flex justify-center items-center">
                  <span className="loading loading-spinner loading-md"></span>
                </div>
            )
         }
        </div>
    );
};

export default ManageAccountPage;