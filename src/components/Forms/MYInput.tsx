import { SxProps, TextField } from "@mui/material";
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
}
const MYInput = ({name,size='small',type='text',label,fullWidth,required,placeholder,sx}:TFormInputs) => {
    const {control}=useFormContext();
    return (
        <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({field,fieldState:{error}})=>(
            <TextField
            {...field}
            label={label}
            fullWidth={fullWidth}
            required={required}
            sx={{...sx}}
            size={size}
            type={type}
            placeholder={placeholder}
            error={!!error?.message}
            helperText={error?.message}
            />
        )}
      />
    );
};

export default MYInput;