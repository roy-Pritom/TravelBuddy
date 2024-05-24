"use client"
import { useGetAllUserQuery } from "@/redux/api/user/userApi";
import { Box, Typography } from "@mui/material";
import {DataGrid,GridColDef} from '@mui/x-data-grid';

const TravelRequestPage = () => {
    const {data:users,isLoading}=useGetAllUserQuery({});
console.log(users);
    const columns:GridColDef[]=[
        {
          field:"name",
          headerName:'Name',
          flex:1
        },
        {
          field:"email",
          headerName:'Email',
          flex:1
        },
     
        // {
        //   field:"file",
        //   headerName:'Photo',
        //   flex:1,
        //   renderCell:({row})=>{
        //     return (
        //         <Box>
        //             <Image src={row.file} width={30} height={30} alt='icon'/>
        //         </Box>
        //     )
        //   }
        // },
      
      ]
      
    return (
        <div>
            <h1>TravelRequestPage</h1>
            {
            !isLoading ? 
            (
                <Box mt={2}>
                <DataGrid
                rows={users}
                columns={columns}
                hideFooter={true}
              
                />
                </Box>
            )
            :
            (
                <Typography>Loading</Typography>
            )
         }
        </div>
    );
};

export default TravelRequestPage;