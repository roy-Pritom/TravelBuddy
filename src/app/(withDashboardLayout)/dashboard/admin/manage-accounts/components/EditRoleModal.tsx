import MyForm from "@/components/Forms/MyForm";
import MySelectField from "@/components/Forms/MySelectField";
import MYModal from "@/components/Modals/MYModal";
import { RoleType } from "@/constants";
import { useUpdateUserRoleMutation } from "@/redux/api/user/userApi";
import { Button } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    id:string;
}


const EditRoleModal = ({ open, setOpen, id }: TProps) => {
    const [updateUserRole] = useUpdateUserRoleMutation();
  
    const handleSubmit = async (values: FieldValues) => {
        //    console.log(values);
        const toastId = toast.loading("Processing...");
        const userData = {
            id,
            data: {
                role: values?.role
            }
        }
        try {
            const res: any = await updateUserRole(userData).unwrap();
            // console.log(res);
            if (res?.id) {
                toast.success("Role updated successfully", { id: toastId, duration: 1000 });
                setOpen(false);
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
        <MYModal open={open} setOpen={setOpen} title="Edit Role">
            <MyForm onSubmit={handleSubmit} defaultValues={{ role: "USER" }}>
                <MySelectField name="role" items={RoleType} fullWidth={true} sx={{
                    width: {
                        sm: "100%",
                        md: "500px",
                        lg: "500px"
                    }
                }} />
                <Button type="submit">Update</Button>
            </MyForm>
        </MYModal>
    );
};

export default EditRoleModal;