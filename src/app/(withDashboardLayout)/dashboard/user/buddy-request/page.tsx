"use client"

import Loader from "@/components/shared/Loader/Loader";
import { useGetReceiveTravelBuddyRequestsByUserQuery, useResponseToBuddyRequestMutation } from "@/redux/api/user/travelApi";
import { formattedDate } from "@/utils/dateFormatter";

import { Avatar, Box } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { toast } from "sonner";

const BuddyRequestsPage = () => {
  const [requestData, setRequestData] = useState<any>([]);
  const [responseToBuddyRequest]=useResponseToBuddyRequestMutation();
    const {data,isLoading}=useGetReceiveTravelBuddyRequestsByUserQuery({});
    // console.log(data);

    useEffect(() => {
        const modifyData = data?.map((item: any) => {
          return {
            id: item?.id,
            senderId: item?.sender?.id,
            status: item?.status,
            budget: item?.trip?.budget,
            destination: item?.trip?.destination,
            startDate: formattedDate(item?.trip?.startDate),
            endDate: formattedDate(item?.trip?.endDate),
            name: item?.sender?.name,
            profilePhoto: item?.sender?.profile?.profilePhoto,
          }
        })
        setRequestData(modifyData)
      }, [data])

      const handleResponse=async(status:string,senderId:string)=>{
        const toastId = toast.loading("Processing...");
        const responseData = {
            senderId,
          data: {
            status
          }
        }
        try {
          const res: any = await responseToBuddyRequest(responseData).unwrap();
          // console.log(res);
          if (res?.id) {
            toast.success("Travel buddy request response successfully", { id: toastId, duration: 1000 });
    
          }
          else {
            toast.error("Something went wrong", { id: toastId, duration: 1000 });
          }
        }
        catch (error: any) {
          console.log(error?.message);
        }
      }

    const columns: GridColDef[] = [
        {
          field: "profilePhoto",
          headerName: 'User',
          flex: 1,
          renderCell: ({ row }) => {
            return (
              <Box>
                <Avatar src={row?.profilePhoto ? row?.profilePhoto : 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png'} alt='icon' />
              </Box>
            )
          }
        },
        {
          field: "name",
          headerName: 'Name',
          flex: 1
        },
        {
          field: "destination",
          headerName: 'Destination',
          flex: 1
        },
        {
          field: "startDate",
          headerName: 'Start Date',
          flex: 1
        },
        {
          field: "endDate",
          headerName: 'End Date',
          flex: 1
        },
        {
          field: "budget",
          headerName: 'Budget',
          flex: 1
        },
        {
          field: "status",
          headerName: 'Status',
          flex: 1
        },
        {
          field: "action",
          headerName: 'Action',
          flex: 1,
          renderCell: ({ row }) => {
            return (
              <div className="">
                {
                    row?.status === "PENDING" &&
                   <div className="">
                       <button onClick={()=>handleResponse('APPROVED',row?.senderId)} className="btn btn-outline btn-xs bg-green-400">Approved</button>
                    <button onClick={()=>handleResponse('REJECTED',row?.senderId)} className="btn btn-outline btn-xs ml-2 bg-red-500">Reject</button>
                   </div>
                }
                {
                    row?.status === "APPROVED" &&

                    <button onClick={()=>handleResponse('REJECTED',row?.senderId)} className="btn btn-outline btn-xs bg-red-500">Reject</button>
          
                }
                {
                    row?.status === "REJECTED" &&

                    <button onClick={()=>handleResponse('APPROVED',row?.senderId)} className="btn btn-outline btn-xs bg-green-400">Approved</button>
          
                }
         
              </div>
            )
          }
        },
    
    
    
      ]
    return (
        <div>
        <h1 className="text-lg font-bold">Send Travel Buddy Request</h1>
        {
          isLoading ?
            (
              <Loader/>
            )
            :
            (
              <Box mt={2}>
                <DataGrid
                  rows={requestData || []}
                  columns={columns}
                  hideFooter={true}
  
                />
              </Box>
  
            )
        }
      </div>
    );
};

export default BuddyRequestsPage;