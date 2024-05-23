import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Input, SxProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';



export default function MYFileUploader({name,label,sx}:{name:string,label:string,sx?:SxProps}) {
    const {control}=useFormContext();
  return (
  <Controller
  name={name}
  control={control}
  render={({field:{onChange,value,...field}})=>{
    return (
        <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        sx={{...sx}}
        startIcon={<CloudUploadIcon />}
       
      >
        Upload file
       <Input
       {...field}
       type={name}
       value={value?.fileName}
       onChange={(e)=>onChange((e?.target as HTMLInputElement)?.files?.[0])}
       style={{display:"none"}}
       />
      </Button>
    )
  }}
  />
  );
}
