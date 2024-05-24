"use client"
import { useGetTravelRequestsByUserQuery } from "@/redux/api/user/travelApi";
import { TravelPlan } from "@/types/travel/travelType";
import { Box } from "@mui/material";
import {DataGrid,GridColDef} from '@mui/x-data-grid';
import Image from "next/image";
import { useEffect, useState } from "react";

const TravelRequestPage = () => {
  const [requestData,setRequestData]=useState<any>([]);
    const {data,isLoading}=useGetTravelRequestsByUserQuery({});
    // console.log(data);

useEffect(()=>{
  const modifyData=data?.map((item:TravelPlan)=>{
    return {
      id:item?.id,
      status:item?.status,
      tripId:item?.tripId,
      destination:item?.trip?.destination,
      photo:item?.trip?.file,
      travelType:item?.trip?.travelType,
      budget:item?.trip?.budget,
      description:item?.trip?.description,

    }
  })
  setRequestData(modifyData);
},[data])
// console.log(requestData);

    const columns:GridColDef[]=[
      {
        field:"photo",
        headerName:'Photo',
        flex:1,
        renderCell:({row})=>{
          return (
              <Box>
                  <Image src={row.photo} width={200} height={200} alt='icon'/>
              </Box>
          )
        }
      },
        {
          field:"destination",
          headerName:'Trip destination',
          flex:1,
      
        },
        {
          field:"travelType",
          headerName:'Type',
          flex:1,
      
        },
        {
          field:"budget",
          headerName:'Budget',
          flex:1,
      
        },
        {
          field:"status",
          headerName:'Status',
          flex:1
        },
     
    
      
      ]
    return (
        <div>
            <h1 className="font-bold text-2xl my-5">Travel Requests :</h1>
            {
            !isLoading ? 
            (
                <Box mt={2}>
                <DataGrid
                rows={requestData || []}
                columns={columns}
                hideFooter={true}
                getRowId={(row)=>row.id}
              
                />
                </Box>
            )
            :
            (
                <span className="loading loading-spinner loading-md"></span>
            )
         }
        </div>
    );
};

export default TravelRequestPage;