import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const PopupForm = ({ openForm,children  }) => {
    const [open,setOpen] = useState(openForm)
    const [close,setClose] = useState(true)

    useEffect(()=>{
        setOpen(openForm)
    },[openForm])

    const handleClose = ()=>{
        setClose(true);
        setOpen(false)
    }
    return (
      <Dialog open={open} >
        <DialogTitle>Popup Form Title</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    );
  };
  
  export default PopupForm;
  