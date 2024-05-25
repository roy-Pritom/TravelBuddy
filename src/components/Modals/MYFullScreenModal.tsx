"use client";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { DialogContent, DialogTitle, SxProps } from '@mui/material';
import { BootstrapDialog } from './MYModal';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type TProps={
    open:boolean;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>;
    sx?:SxProps;
    title:string;
    children:React.ReactNode;
}

export default function MYFullScreenModal({open,setOpen,sx,title,children}:TProps) {



  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
     
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      sx={{...sx}}
      TransitionComponent={Transition}
      fullScreen={true}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        {children}
      </DialogContent>
    </BootstrapDialog>
  </React.Fragment>
  );
}
