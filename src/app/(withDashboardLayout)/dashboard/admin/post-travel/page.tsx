"use client"
import { Box, Button, IconButton, Pagination, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { useGetTripByUserQuery } from "@/redux/api/user/tripApi";
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Loader from "@/components/shared/Loader/Loader";
import { useDebounced } from "@/redux/hooks";
import TravelPostModal from "../../user/post-travel/components/TravelPostModal";
import { getUserInfo } from "@/services/auth.service";

const TravelPostPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const userData = getUserInfo();
  const [searchTerm, setSearchTerm] = useState<string>('')
  const query: Record<string, any> = {};
  const debounced = useDebounced({ searchTerm: searchTerm, delay: 500 });
  if (!!debounced) {
    query['searchTerm'] = searchTerm;
  }
  query['page']=page;
  query['limit']=limit;
  const [open, setOpen] = useState<boolean>(false);
  const { data, isLoading, refetch } = useGetTripByUserQuery({ ...query }, { skip: !userData });
  const trips=data?.trips as [];
  const meta=data?.meta;
  // console.log(trips);
  const [localLoading, setLocalLoading] = useState(true);

  const [previousUserId, setPreviousUserId] = useState<string | null>(null);
  useEffect(() => {
    // Only run the effect if userData is defined and user ID has changed
    if (userData && userData.id !== previousUserId) {
      setLocalLoading(true);
      // console.log('Fetching new user data');
      refetch().finally(() => {
        setLocalLoading(false);
        setPreviousUserId(userData.id);
      });
    } else if (!userData) {
      setLocalLoading(false);
    }
  }, [userData, previousUserId, refetch]);
  // console.log(trips);

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
      flex: 1
    },
    {
      field: "travelType",
      headerName: 'TravelType',
      flex: 1
    },
    {
      field: "startDate",
      headerName: 'StartDate',
      flex: 1
    },
    {
      field: "endDate",
      headerName: 'endDate',
      flex: 1
    }

  ]



  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button size="small" onClick={() => setOpen(true)}>Post Travel</Button>
        <TextField size="small" label="search" onChange={(e) => setSearchTerm(e.target.value)} />
        <TravelPostModal open={open as boolean} setOpen={setOpen} />
      </Stack>
      {
        isLoading || localLoading ?
          (
            <Loader />
          )
          :
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
      }
    </Box>
  );
};

export default TravelPostPage;