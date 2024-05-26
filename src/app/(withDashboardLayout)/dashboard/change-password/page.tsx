"use client"
import MYInput from "@/components/Forms/MYInput";
import MyForm from "@/components/Forms/MyForm";
import { useChangePasswordMutation } from "@/redux/api/user/userApi";
import { Button, Grid, Stack } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const ChangePasswordPage = () => {
    const [changePassword]=useChangePasswordMutation();
    const handleSubmit=async(values:FieldValues)=>{
        const toastId=toast.loading('Processing...');
    
        try {
            const res: any = await changePassword(values);
            // console.log(res);
            if (res?.data?.status===200) {
              toast.success("Password changed successfully!", { id: toastId, duration: 1000 });
      
            }
            else {
              toast.error("Old Password is incorrect", { id: toastId, duration: 1000 });
            }
          }
          catch (error: any) {
            console.log(error?.message);
          }
    }
    return (
        <Stack>
            <MyForm onSubmit={handleSubmit}>
               <Grid container spacing={2}>
                <Grid item md={12}>
                    <MYInput
                    name="oldPassword"
                    label="Old Password"
                    required={true}
                    />
                </Grid>
                <Grid item md={12}>
                    <MYInput
                    name="newPassword"
                    label="New Password"
                    required={true}

                    />
                </Grid>
               </Grid>
               <Button type="submit">Change Password</Button>
            </MyForm>
        </Stack>
    );
};

export default ChangePasswordPage;