import { UserValidation } from "@/ValidationSchema/userValidation";
import MYFileUploader from "@/components/Forms/MYFileUploader";
import MYInput from "@/components/Forms/MYInput";
import MyForm from "@/components/Forms/MyForm";
import MYModal from "@/components/Modals/MYModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
 }

 const handleSubmit = async (values: FieldValues) => {
    // const toastId=toast.loading("Processing...")
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

    values.age=Number(values?.age)
    // console.log(values);
    const userData={
       ...values,
       profilePhoto:imgData?.data?.url
    }
    console.log(userData);
    // try{
    //    const res:any=await createTrip(tripData);
    //    // console.log(res);
    //    if(res?.data?.id){
    //          toast.success("Trip created successfully",{id:toastId,duration:1000});
    //          setOpen(false);
    //    }
    //    else{
    //       toast.error("Something went wrong",{id:toastId,duration:1000});
    //    }
    // }
    // catch(error:any){
    //    console.log(error?.message);
    // }
 }
 
const EditProfileModal = ({ open, setOpen }: TProps) => {
    return (
      <MYModal open={open} setOpen={setOpen} title="Edit Your Profile" >
               <MyForm onSubmit={handleSubmit} resolver={zodResolver(UserValidation)} >
            <Grid container spacing={2} sx={{ width: '400px' }}>
               <Grid item md={6}>
                  <MYInput name="name" label="Name" />
               </Grid>
               <Grid item md={6} sx={{ width: "100%" }}>
                  <MYInput name="email" label="Email" />
               </Grid>
           
               <Grid item md={6}>
                  <MYInput name="Bio" label="Bio" />
               </Grid>
               <Grid item md={6}>
                  <MYInput name="age" label="Age" type="number"/>
               </Grid>
               <Grid item md={6}>
                  <MYFileUploader name="file" label="Upload Photo" sx={{ width: "100%" }} />
               </Grid>
            </Grid>
            <Button type="submit">Submit</Button>
         </MyForm>
      </MYModal>
    );
};

export default EditProfileModal;