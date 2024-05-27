"use client"
import MYFileUploader from "@/components/Forms/MYFileUploader";
import MYInput from "@/components/Forms/MYInput";
import MyForm from "@/components/Forms/MyForm";
import TravelDatePicker from "@/components/Forms/TravelDatePicker";
import { useGetTripByIdQuery, useUpdateTripMutation } from "@/redux/api/user/tripApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const TripEditPage = ({ params }: { params: { tripId: string } }) => {
    const router=useRouter();
    const { tripId } = params;
    const [updateTrip] = useUpdateTripMutation();
    const { data: trip, isLoading } = useGetTripByIdQuery(tripId);
    // console.log(trip);
    const defaultValues = {
        destination: trip?.destination || "",
        description: trip?.description || "",
        budget: trip?.budget || "",
        startDate: trip?.startDate || "",
        endDate: trip?.endDate || "",
        travelType: trip?.travelType || "",
        file: trip?.file || ""
    }

    const handleSubmit = async (values: FieldValues) => {
        const toastId = toast.loading("Processing...")
        values.budget = Number(values?.budget)
        values.startDate = dateFormatter(values.startDate)
        values.endDate = dateFormatter(values.endDate)
        // console.log(values);
        const formData = new FormData();
        formData.append('image', values?.file as File)
        let imgData;
        if (values?.file) {
            const res = await fetch('https://api.imgbb.com/1/upload?key=6749631c2e45f70877065641e53b6c43', {
                method: 'POST',

                body: formData
            })
            imgData = await res.json();
            // console.log(imgData);
        }

        const tripData = {
          data:{
            ...values,
            file: imgData?.data?.url
          },
          tripId
        }
        // console.log(tripData);
        try {
            const res: any = await updateTrip(tripData).unwrap();
            // console.log(res);
            if (res?.id) {
                toast.success("Trip updated successfully", { id: toastId, duration: 1000 });
                router.push('/dashboard/admin/manage-trips')

            }
            else {
                toast.error("Something went wrong", { id: toastId, duration: 1000 });
            }
        }
        catch (error: any) {
            console.log(error?.message);
        }
    }
    return (

     <Box>
        <Typography component='h5' variant="h5" ml={4} >Edit Trip</Typography>
  { 
         isLoading ? (
         <div className="flex justify-center items-center">
               <span className="loading loading-spinner loading-md"></span>
         </div>
         )
         :
         (
            <MyForm onSubmit={handleSubmit} defaultValues={defaultValues} >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                    <MYInput
                        name="destination"
                        label="Destination"
                        fullWidth={true}
                        sx={{ mb: 2 }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <MYInput
                        name="budget"
                        label="Budget"
                        fullWidth={true}
                        sx={{ mb: 2 }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <MYInput
                        name="travelType"
                        label="TravelType"
                        fullWidth={true}
                        sx={{ mb: 2 }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <MYInput
                        name="description"
                        label="Description"
                        fullWidth={true}
                        sx={{ mb: 2, height: "50px" }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <TravelDatePicker
                        name="startDate"
                        label="StartDate"
                        fullWidth={true}
                        sx={{ mb: 2 }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <TravelDatePicker
                        name="endDate"
                        label="EndDate"
                        fullWidth={true}
                        sx={{ mb: 2 }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <MYFileUploader
                        name="file"
                        label="Photo"
                        sx={{ mb: 2, width: "100%" }}
                    />
                </Grid>
            </Grid>
            <Button type="submit">Submit</Button>
        </MyForm>
         )
   }
     </Box>


    );
};

export default TripEditPage;