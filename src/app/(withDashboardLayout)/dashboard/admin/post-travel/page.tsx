"use client"
import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { useGetTripByUserQuery } from "@/redux/api/user/tripApi";
import EditIcon  from '@mui/icons-material/Edit';
import {DataGrid,GridColDef} from '@mui/x-data-grid';
import Loader from "@/components/shared/Loader/Loader";
import { useDebounced } from "@/redux/hooks";
import TravelPostModal from "../../user/post-travel/components/TravelPostModal";

const TravelPostPage = () => {
  const [searchTerm,setSearchTerm]=useState<string>('')
  const query:Record<string,any>={};
  const debounced=useDebounced({searchTerm:searchTerm,delay:500});
  if(!!debounced){
    query['searchTerm']=searchTerm;
  }
  const [open, setOpen] = useState<boolean>(false);
const {data:trips,isLoading}=useGetTripByUserQuery({...query});
// console.log(trips);


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
  }

]



    return (
      <Box>
         <Stack direction="row" justifyContent="space-between">
            <Button size="small" onClick={()=>setOpen(true)}>Post Travel</Button>
            <TextField size="small" label="search" onChange={(e)=>setSearchTerm(e.target.value)}/>
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