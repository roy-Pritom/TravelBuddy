"use client"

import { useDeleteTripMutation, useGetAllTripsQuery } from "@/redux/api/user/tripApi";
import { Box, IconButton, Pagination, Stack, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Link from "next/link";
import Swal from 'sweetalert2'
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ViewTripModal from "./components/ViewTripModal";
import { useDebounced } from "@/redux/hooks";

const ManageTripsPage = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(7);
    const [open,setOpen]=useState<boolean>(false);
    const [tripId,setTripId]=useState<string>('');
    const [searchTerm,setSearchTerm]=useState<string>('')
    const query:Record<string,any>={};
    const debounced=useDebounced({searchTerm:searchTerm,delay:500});
    if(!!debounced){
      query['searchTerm']=searchTerm;
    }
    query['page']=page;
    query['limit']=limit;
    const { data, isLoading } = useGetAllTripsQuery({...query});
    const trips=data?.trips as [];
    const meta=data?.meta;
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


    const handleView=(id:string)=>{
        setTripId(id)
        setOpen(true)
    }

    let pageCount:number;
    if(meta?.total){
      pageCount=Math.ceil(meta.total / limit)
    }
  
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };

    const columns: GridColDef[] = [

     
        {
            field: "destination",
            headerName: 'Destination',
            flex: 1,

        },
        {
            field: "description",
            headerName: 'Description',
            flex: 1,

        },
        {
            field: "budget",
            headerName: 'Budget',
            flex: 1,

        },
        {
            field: "startDate",
            headerName: 'StartDate',
            flex: 1,

        },
        {
            field: "endDate",
            headerName: 'EndDate',
            flex: 1,

        },

        {
            field: "action",
            headerName: 'Action',
            flex: 1,
            headerAlign: 'center',
            align: "center",
            renderCell: ({ row }) => {
                return (
                    <Box>
                            <IconButton aria-label='view' onClick={()=>handleView(row?.id)}>
                                <VisibilityIcon/>
                            </IconButton>
                            <ViewTripModal open={open} setOpen={setOpen} id={tripId}/>

                        <Link href={`manage-trips/edit/${row?.id}`}>
                            <IconButton aria-label='edit'>
                                <EditNoteIcon />
                            </IconButton>
                        </Link>

                        <IconButton aria-label='edit' sx={{ color: "red" }} onClick={() => handleDelete(row?.id)}>
                            <DeleteForeverIcon />
                        </IconButton>

                    </Box>
                )
            }
        },




    ]
    return (
        <Box>
            <Stack direction='row' justifyContent="space-between">
                <Typography variant="h5" component="h5" fontWeight={600}>All Trips</Typography><TextField size="small" label="search" onChange={(e)=>setSearchTerm(e.target.value)} />
            </Stack>
            {
                !isLoading ?
                    (
                        <Box mt={2}>
                            <DataGrid
                                rows={trips || []}
                                columns={columns}
                                hideFooterPagination
                                slots={{
                                  footer:()=>{
                                    return <Box sx={{mb:2,display:'flex',justifyContent:"center",alignItems:"center"}}>
                                         <Pagination count={pageCount} page={page} onChange={handleChange} />
                                    </Box>
                                  }
                                }}

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
        </Box>
    );
};

export default ManageTripsPage;