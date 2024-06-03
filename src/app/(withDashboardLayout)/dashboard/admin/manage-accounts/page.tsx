"use client"
import { useGetAllUserQuery, useUpdateAccountStatusMutation } from '@/redux/api/user/userApi';
import { Avatar, Box, IconButton, Pagination, Tooltip } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { toast } from 'sonner';
import EditRoleModal from './components/EditRoleModal';
const ManageAccountPage = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [open, setOpen] = useState<boolean>(false);
    const query: Record<string, any> = {};
    query['page']=page;
    query['limit']=limit;
    const { data, isLoading } = useGetAllUserQuery({...query});
    const users = data?.users as [];
    const meta = data?.meta;
    // console.log(users);
    const [userData, setUserData] = useState<any>([]);
    const [updateAccountStatus] = useUpdateAccountStatusMutation();

    useEffect(() => {
        const modifyData = users?.map((item: any) => {
            return {
                id: item?.id,
                name: item?.name,
                email: item?.email,
                role: item?.role,
                accountStatus: item?.accountStatus,
                profilePhoto: item?.profile?.profilePhoto
            }
        })
        setUserData(modifyData);
    }, [users])


    const handleStatus = async (status: string, id: string) => {
        const toastId = toast.loading("Processing...")
        const userData = {
            id,
            data: {
                accountStatus: status
            }
        }
        try {
            const res: any = await updateAccountStatus(userData).unwrap();
            // console.log(res);
            if (res?.id) {
                toast.success("Status updated successfully", { id: toastId, duration: 1000 });

            }
            else {
                toast.error("Something went wrong", { id: toastId, duration: 1000 });
            }
        }
        catch (error: any) {
            console.log(error?.message);
        }
    }

    let pageCount: number;
    if (meta?.total) {
        pageCount = Math.ceil(meta.total / limit)
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const columns: GridColDef[] = [

        {
            field: "profilePhoto",
            headerName: 'Profile Photo',
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Box>
                        <Avatar alt='userPhoto' src={row.profilePhoto ? row.profilePhoto : 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png'} />
                    </Box>
                )
            }
        },
        {
            field: "name",
            headerName: 'Name',
            flex: 1,

        },
        {
            field: "email",
            headerName: 'Email',
            flex: 1,

        },
        {
            field: "role",
            headerName: 'Role',
            flex: 1,

        },
        {
            field: "accountStatus",
            headerName: 'Status',
            flex: 1,
            renderCell: ({ row }) => {
                return (
                    <Box>
                        {
                            row?.accountStatus === 'ACTIVE' ?
                                (
                                    <IconButton aria-label='active' sx={{ color: "green" }} >
                                        <VerifiedUserIcon />
                                    </IconButton>
                                )
                                :
                                (
                                    <IconButton aria-label='deactivate' sx={{ color: "red" }} >
                                        <NoAccountsIcon />
                                    </IconButton>
                                )
                        }
                    </Box>
                )
            }

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
                        {
                            row?.accountStatus === 'ACTIVE' ?
                                (
                                    <button onClick={() => handleStatus('DEACTIVATE', row?.id)} className='btn btn-xs'>Block</button>
                                )
                                :
                                (
                                    <button onClick={() => handleStatus('ACTIVE', row?.id)} className='btn btn-xs'>Active</button>
                                )
                        }
                        <Tooltip title="Edit Role">
                            <IconButton aria-label='edit' onClick={() => setOpen(true)}>
                                <EditNoteIcon />
                            </IconButton>
                        </Tooltip>
                        <EditRoleModal open={open} setOpen={setOpen} id={row?.id} />

                    </Box>
                )
            }
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
                                rows={userData || []}
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
        </div>
    );
};

export default ManageAccountPage;