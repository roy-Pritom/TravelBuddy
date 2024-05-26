import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Input, SxProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';



export default function MYFileUploader({ name, label, sx, required }: { name: string, label: string, sx?: SxProps, required?: boolean }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required && 'File is required' }} // Add validation rule for required field
      render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
        <>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            sx={{ ...sx }}
            startIcon={<CloudUploadIcon />}
          >
            {label}
            <Input
              {...field}
              type="file"
              onChange={(e) => onChange((e.target as HTMLInputElement).files?.[0] || null)} // Handle file selection
              style={{ display: 'none' }}
            />
          </Button>
          {required && error && (
            <p style={{ color: 'red', marginTop: 5 }}>{error.message}</p> // Display error message
          )}
        </>
      )}
    />
  );
}