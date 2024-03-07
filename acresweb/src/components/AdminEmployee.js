import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react'
import AddButton from './AddButton';
import PopupForm from './PopupForm';
import TaskManagement from './TaskManagement';
import CreateNewEmployee from './CreateNewEmployee';
import HomeButton from './HomeButton';
export default function AdminEmployee() {
    const [sites,setSites] = useState([{name:"Shubbam"},{name:"Paul"},{name:"Cornnor"}])
    const [openAddNewEmployeePopup,setOpenAddNewEmployeePopup] = useState(false)
    const [selectedEmployee,setSelectedEmployee] = useState(null)

    const handleNewEmployeePopup = ()=>{
        setOpenAddNewEmployeePopup(!openAddNewEmployeePopup)
    }
  return (
   <Grid container>
    <Grid item> <HomeButton sx={{color:'green',fontSize:30,position:'relative',top:10}} onPress={()=>setSelectedEmployee(null)}/></Grid>
    <Grid item><AddButton onPress={()=>handleNewEmployeePopup()}/> </Grid>
    <PopupForm title={"Add New Employee"} openForm={openAddNewEmployeePopup} onClose={handleNewEmployeePopup}><CreateNewEmployee/> </PopupForm>

    {selectedEmployee?<Grid container sx={styles.page}><Typography >Employee Details goes here</Typography></Grid>:<></>}
    {!selectedEmployee && sites.map((data)=>{
        return <Grid container sx={styles.page} onClick={()=>setSelectedEmployee(data)}>
            <Typography >{data.name}</Typography>
        </Grid>
    })}
   </Grid>
  )
}

const styles = {
    page:{padding:5,borderBottom:1}
}


