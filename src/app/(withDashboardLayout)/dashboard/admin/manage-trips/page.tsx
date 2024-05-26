"use client"

import { useDeleteTripMutation, useGetAllTripsQuery } from "@/redux/api/user/tripApi";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
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
    const [open,setOpen]=useState<boolean>(false);
    const [tripId,setTripId]=useState<string>('');
    const [searchTerm,setSearchTerm]=useState<string>('')
    const query:Record<string,any>={};
    const debounced=useDebounced({searchTerm:searchTerm,delay:500});
    if(!!debounced){
      query['searchTerm']=searchTerm;
    }
    const { data: trips, isLoading } = useGetAllTripsQuery({...query});
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

    const columns: GridColDef[] = [

        // {
        //     field: "profilePhoto",
        //     headerName: 'Profile Photo',
        //     flex: 1,
        //     renderCell: ({ row }) => {
        //         return (
        //             <Box>
        //                 <Avatar alt='userPhoto' src={row.profilePhoto ? row.profilePhoto : 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png'} />
        //             </Box>
        //         )
        //     }
        // },
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
        // {
        //     field: "accountStatus",
        //     headerName: 'Status',
        //     flex: 1,
        //     renderCell: ({ row }) => {
        //         return (
        //        <Box>
        //         {
        //             row?.accountStatus==='ACTIVE'?
        //             (
        //                       <IconButton  aria-label='active' sx={{color:"green"}} >
        //                       <VerifiedUserIcon/>
        //                       </IconButton>
        //             )
        //             :
        //             (
        //                 <IconButton  aria-label='deactivate' sx={{color:"red"}} >
        //                 <NoAccountsIcon/>
        //                 </IconButton>
        //             )
        //         }
        //        </Box>
        //            )
        //     }

        // },

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
                                hideFooter={true}
                                getRowId={(row) => row.id}

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