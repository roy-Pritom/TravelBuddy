"use client"
import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import TravelPostModal from "./components/TravelPostModal";
import { useDeleteTripMutation, useGetTripByUserQuery } from "@/redux/api/user/tripApi";
import EditIcon  from '@mui/icons-material/Edit';
import {DataGrid,GridColDef} from '@mui/x-data-grid';
import Loader from "@/components/shared/Loader/Loader";
import { useDebounced } from "@/redux/hooks";
import Swal from "sweetalert2";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Link from "next/link";

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
const [deleteTrip] = useDeleteTripMutation();
    // delete trip
    const handleDelete = async (id: string) => {
      const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
      });

      if (result.isConfirmed) {
          try {
              const res = await deleteTrip(id).unwrap();
              // console.log(res);
              if (res?.id) {
                  Swal.fire({
                      title: "Deleted!",
                      text: "Trip has been deleted.",
                      icon: "success"
                  });
              }
              else {
                  Swal.fire({
                      title: "Error!",
                      text: "There was an error deleting trip.",
                      icon: "error"
                  });
              }
          } catch (error) {
              Swal.fire({
                  title: "Error!",
                  text: "There was an error deleting trip.",
                  icon: "error"
              });
          }
      }
  };

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
              <IconButton aria-label='delete' onClick={()=>handleDelete(row?.id)} sx={{ color: "red" }}>
              {/* <EditIcon/> */}
              <DeleteForeverIcon/>
              </IconButton>
             <Link href={`/dashboard/user/post-travel/edit/${row?.id}`}>
             <IconButton aria-label='edit'>
              <EditIcon/>
              </IconButton>
             </Link>
          </Box>
      )
    }
  },
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