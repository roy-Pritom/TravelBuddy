import MYInput from "@/components/Forms/MYInput";
import MyForm from "@/components/Forms/MyForm";
import MYModal from "@/components/Modals/MYModal";
import { Button, Grid } from "@mui/material";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
 }

 const handleSubmit=()=>{

 }
 
const EditProfileModal = ({ open, setOpen }: TProps) => {
    return (
      <MYModal open={open} setOpen={setOpen} title="Edit Your Profile" >
               <MyForm onSubmit={handleSubmit}  >
            <Grid container spacing={2} sx={{ width: '400px' }}>
               <Grid item md={6}>
                  <MYInput name="destination" label="Destination" />
               </Grid>
               <Grid item md={6} sx={{ width: "100%" }}>
                  <MYInput name="description" label="Detailed description" />
               </Grid>
           
               <Grid item md={6}>
                  <MYInput name="budget" label="Budget" type="number" />
               </Grid>
               <Grid item md={6}>
                  <MYInput name="activities" label="Activities" />
               </Grid>
               {/* <Grid item md={6}>
                  <MYFileUploader name="file" label="Upload Photo" sx={{ width: "100%" }} />
               </Grid> */}
            </Grid>
            <Button type="submit">Submit</Button>
         </MyForm>
      </MYModal>
    );
};

export default EditProfileModal;