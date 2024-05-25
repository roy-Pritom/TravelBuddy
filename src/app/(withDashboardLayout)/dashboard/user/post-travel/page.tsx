"use client"
import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import TravelPostModal from "./components/TravelPostModal";
import { useGetTripByUserQuery } from "@/redux/api/user/tripApi";
import EditIcon  from '@mui/icons-material/Edit';
import {DataGrid,GridColDef} from '@mui/x-data-grid';
import Loader from "@/components/shared/Loader/Loader";

const TravelPostPage = () => {
  const [open, setOpen] = useState<boolean>(false);
const {data:trips,isLoading}=useGetTripByUserQuery({});
// console.log(trips);

const handleDelete=(id:string)=>{
  console.log(id);
}

const columns:GridColDef[]=[
  {
    field:"destination",
    headerName:'Destination',
    flex:1
  },
  {
    field:"travelType",
    headerName:'TravelType',
    flex:1
  },
  {
    field:"startDate",
    headerName:'StartDate',
    flex:1
  },
  {
    field:"endDate",
    headerName:'endDate',
    flex:1
  },

  {
    field:"action",
    headerName:'Action',
    flex:1,
    headerAlign:'center',
    align:"center",
    renderCell:({row})=>{
      return (
          <Box>
              <IconButton aria-label='delete' onClick={()=>handleDelete(row.id)}>
              <EditIcon/>
              </IconButton>
          </Box>
      )
    }
  },
]



    return (
      <Box>
         <Stack direction="row" justifyContent="space-between">
            <Button size="small" onClick={()=>setOpen(true)}>Post Travel</Button>
            <TextField size="small"/>
            <TravelPostModal open={open as boolean} setOpen={setOpen}/>
         </Stack>
         {
            !isLoading ? 
            (
                <Box mt={2}>
                <DataGrid
                rows={trips || []}
                columns={columns}
                hideFooter={true}
              
                />
                </Box>
            )
            :
            (
               <Loader/>
            )
         }
      </Box>
    );
};

export default TravelPostPage;