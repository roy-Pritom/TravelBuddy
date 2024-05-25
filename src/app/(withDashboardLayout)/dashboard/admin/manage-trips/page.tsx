"use client"

import { useGetAllTripsQuery } from "@/redux/api/user/tripApi";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";
import EditTripModal from "./components/EditTripModal";
const ManageTripsPage = () => {
  const [open, setOpen] = useState<boolean>(false);
    const {data:trips,isLoading}=useGetAllTripsQuery({});
// console.log(trips);
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
                      <IconButton aria-label='edit' onClick={()=>setOpen(true)}>
                            <EditNoteIcon />
                        </IconButton>
                        <EditTripModal open={open as boolean} setOpen={setOpen}/>
                      <IconButton aria-label='edit' sx={{color:"red"}} >
                          <DeleteForeverIcon/>
                        </IconButton>

                    </Box>
                )
            }
        },




    ]
    return (
 <Box>
    <Stack direction='row' justifyContent="space-between">
    <Typography variant="h5" component="h5" fontWeight={600}>All Trips</Typography>
    <TextField size="small" label="search"/>
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