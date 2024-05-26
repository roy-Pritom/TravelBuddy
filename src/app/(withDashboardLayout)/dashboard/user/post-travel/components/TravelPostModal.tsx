"use client"
import { travelSchema } from "@/ValidationSchema/TravelValidation";
import MYFileUploader from "@/components/Forms/MYFileUploader";
import MYInput from "@/components/Forms/MYInput";
import MyForm from "@/components/Forms/MyForm";
import MySelectField from "@/components/Forms/MySelectField";
import TravelDatePicker from "@/components/Forms/TravelDatePicker";
import MYFullScreenModal from "@/components/Modals/MYFullScreenModal";
import MYModal from "@/components/Modals/MYModal";
import { TravelType } from "@/constants";
import { useCreateTripMutation } from "@/redux/api/user/tripApi";
import { dateFormatter } from "@/utils/dateFormatter";
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
      <MYFullScreenModal open={open} setOpen={setOpen} title="Post a Travel/Trip" >
         <MyForm onSubmit={handleSubmit}  >
            <Grid container spacing={2} >
               <Grid item md={4} sm={12} xs={12}>
                  <MYInput name="destination" label="Destination" fullWidth={true} required={true}/>
               </Grid>
            
               <Grid item md={4} sm={12} xs={12}>
                  <TravelDatePicker name="startDate" label="StartDate" fullWidth={true} required={true}/>
               </Grid>
               <Grid item md={4} sm={12} xs={12}>
                  <TravelDatePicker name="endDate" label="EndDate" fullWidth={true} required={true}/>
               </Grid>
               <Grid item md={12} sm={12} xs={12} >
                  <MYInput name="description" label="Detailed description" fullWidth={true} required={true}/>
               </Grid>
               <Grid item md={6} sm={12} xs={12}>
                  <MySelectField name="travelType" label="Travel type"
                     items={TravelType}
                     fullWidth={true}
                     required={true}
                  />
               </Grid>
               <Grid item md={6} sm={12} xs={12}>
                  <MYInput name="budget" label="Budget" type="number"  fullWidth={true}
                  required={true}/>
               </Grid>
               <Grid item md={6} sm={12} xs={12}>
                  <MYFileUploader name="file" label="Upload Photo" sx={{ width: "100%" }} 
                  required={true}
                  />
               </Grid>
            </Grid>
            <Button type="submit">Post</Button>
         </MyForm>
      </MYFullScreenModal>
   );
};

export default TravelPostModal;