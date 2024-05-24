"use client"
import { travelSchema } from "@/ValidationSchema/TravelValidation";
import MYFileUploader from "@/components/Forms/MYFileUploader";
import MYInput from "@/components/Forms/MYInput";
import MyForm from "@/components/Forms/MyForm";
import MySelectField from "@/components/Forms/MySelectField";
import TravelDatePicker from "@/components/Forms/TravelDatePicker";
import MYModal from "@/components/Modals/MYModal";
import { TravelType } from "@/constants";
import { useCreateTripMutation } from "@/redux/api/user/tripApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const TravelPostModal = ({ open, setOpen }: TProps) => {
   const [createTrip]=useCreateTripMutation();
   const handleSubmit = async (values: FieldValues) => {
      const toastId=toast.loading("Processing...")
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
      values.startDate = dateFormatter(values.startDate.$d)
      values.endDate = dateFormatter(values.endDate.$d)
      values.budget=Number( values?.budget)
      values.activities=[]
      // console.log(values);
      const tripData={
         ...values,
         file:imgData?.data?.url
      }
      // console.log(tripData);
      try{
         const res:any=await createTrip(tripData);
         // console.log(res);
         if(res?.data?.id){
               toast.success("Trip created successfully",{id:toastId,duration:1000});
               setOpen(false);
         }
         else{
            toast.error("Something went wrong",{id:toastId,duration:1000});
         }
      }
      catch(error:any){
         console.log(error?.message);
      }
   }
   return (
      <MYModal open={open} setOpen={setOpen} title="Post a Travel/Trip" >
         <MyForm onSubmit={handleSubmit}  >
            <Grid container spacing={2} sx={{ width: '400px' }}>
               <Grid item md={6}>
                  <MYInput name="destination" label="Destination" />
               </Grid>
               <Grid item md={6} sx={{ width: "100%" }}>
                  <MYInput name="description" label="Detailed description" />
               </Grid>
               <Grid item md={6}>
                  <TravelDatePicker name="startDate" label="StartDate" />
               </Grid>
               <Grid item md={6}>
                  <TravelDatePicker name="endDate" label="EndDate" />
               </Grid>
               <Grid item md={6}>
                  <MySelectField name="travelType" label="Travel type"
                     items={TravelType}
                     fullWidth={true}
                  />
               </Grid>
               <Grid item md={6}>
                  <MYInput name="budget" label="Budget" type="number" />
               </Grid>
               <Grid item md={6}>
                  <MYInput name="activities" label="Activities" />
               </Grid>
               <Grid item md={6}>
                  <MYFileUploader name="file" label="Upload Photo" sx={{ width: "100%" }} />
               </Grid>
            </Grid>
            <Button type="submit">Post</Button>
         </MyForm>
      </MYModal>
   );
};

export default TravelPostModal;