import MYInput from "@/components/Forms/MYInput";
import MyForm from "@/components/Forms/MyForm";
import MYFullScreenModal from "@/components/Modals/MYFullScreenModal";
import { Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    // id:string;
}
const EditTripModal = ({ open, setOpen }: TProps) => {

    const handleSubmit=async(values:FieldValues)=>{
        console.log(values);
    }

    return (
      <MYFullScreenModal open={open as boolean} setOpen={setOpen} title="Edit Trip">
        <MyForm onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                    <Grid item md={6} sm={12}>
                        <MYInput name="trip"/>
                    </Grid>
              </Grid>
        </MyForm>

      </MYFullScreenModal>
    );
};

export default EditTripModal;