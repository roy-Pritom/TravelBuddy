import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";


type TFormInputs={
    name:string;
    size?:"small" | "medium";
    type?:string;
    label?:string;
    fullWidth?:boolean;
    placeholder?:string;
    sx?:SxProps;
    required?:boolean;
    items:string[];
}
const MySelectField = ({name,sx,size='small',label,type='text',fullWidth,required,items}:TFormInputs) => {
    const {control,formState}=useFormContext();
    const isError=formState.errors[name]!== undefined;
    return (
      <Controller
      control={control}
      name={name}
      render={({field,fieldState:{error}})=>(
        <TextField
        {...field}
        select
        sx={{...sx}}
        size={size}
        type={type}
        placeholder={label}
        label={label}
        fullWidth={fullWidth}
        variant="outlined"
        required={required}
        error={!!error?.message}
        helperText={isError? (formState.errors[name]?.message as string):""}
        >
           {
            items.map((name:string)=>(
                <MenuItem key={name} value={name}>
                {name}
                </MenuItem>
            ))
           }
        </TextField>
      )}
      />
    );
};

export default MySelectField;