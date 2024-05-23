import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { SxProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type TProps={
    name:string;
    type?:string;
    size?:'small' |  'medium';
    label?:string;
    fullWidth?:boolean;
    required?:boolean;
    sx?:SxProps;
}

const TravelDatePicker = ({name,type='text',label,size='small',fullWidth=true,required,sx}:TProps) => {
    const {control}=useFormContext();
    return (
       <Controller
       name={name}
       control={control}
       defaultValue={dayjs(new Date().toDateString())}
       render={({field:{onChange,value,...field}})=>{
        return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
            timezone='system'
            disablePast
             {...field} 
             onChange={(date)=>onChange(date)}
             value={value || Date.now()}
             slotProps={{
                textField:{
                    label:label,
                    required:required,
                    size:size,
                    sx:{
                        ...sx
                    },
                    variant:"outlined",
                    fullWidth:fullWidth
                }
             }}
             />
           </LocalizationProvider>
        )
       }}
    
       
       />
    );
};

export default TravelDatePicker;