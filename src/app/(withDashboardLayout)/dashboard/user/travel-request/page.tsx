"use client"
import Loader from "@/components/shared/Loader/Loader";
import { useSendTravelBuddyRequestMutation } from "@/redux/api/user/travelApi";
import { useGetAllTripsQuery } from "@/redux/api/user/tripApi";
import { useDebounced } from "@/redux/hooks";
import { formattedDate } from "@/utils/dateFormatter";
import { Avatar, Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import { toast } from "sonner";

const TravelRequestPage = () => {
  const [tripData, setTripData] = useState<any>([]);
  const [searchTerm,setSearchTerm]=useState<string>('')
  const query:Record<string,any>={};
  const debounced=useDebounced({searchTerm:searchTerm,delay:500});
  if(!!debounced){
    query['searchTerm']=searchTerm;
  }
  const { data: trips, isLoading } = useGetAllTripsQuery({...query})
  // console.log(trips);
  const [sendTravelBuddyRequest] = useSendTravelBuddyRequestMutation();
  useEffect(() => {
    const modifyData = trips?.map((trip: any) => {
      return {
        id: trip?.id,
        userId: trip?.user?.id,
        budget: trip?.budget,
        destination: trip?.destination,
        startDate: formattedDate(trip?.startDate),
        endDate: formattedDate(trip?.endDate),
        name: trip?.user?.name,
        profilePhoto: trip?.user?.profile?.profilePhoto,
      }
    })
    setTripData(modifyData)
  }, [trips])
  // console.log({tripData});

  const handleSendRequest = async (tripId: string, userId: string) => {
    const toastId = toast.loading("Processing...");
    const requestData = {
      tripId,
      data: {
        userId
      }
    }
    try {
      const res: any = await sendTravelBuddyRequest(requestData).unwrap();
      // console.log(res);
      if (res?.id) {
        toast.success("Travel buddy request send successfully", { id: toastId, duration: 1000 });

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
      field: "action",
      headerName: 'Action',
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <div className="">
            <button onClick={() => handleSendRequest(row?.id, row?.userId)} className="btn btn-outline btn-xs">Send Request</button>
          </div>
        )
      }
    },



  ]

  return (
    <Box>
     <Stack direction="row" justifyContent="space-between" alignItems="center">
     <h1 className="md:text-lg text-base font-bold">Send Travel Buddy Request</h1>
      <TextField onChange={(e)=>setSearchTerm(e.target.value)} size="small" label="search destination"/>
     </Stack>
      {
        isLoading ?
          (
            <Loader />
          )
          :
          (
            <Box mt={2}>
              <DataGrid
                rows={tripData || []}
                columns={columns}
                hideFooter={true}

              />
            </Box>

          )
      }
    </Box>
  );
};

export default TravelRequestPage;