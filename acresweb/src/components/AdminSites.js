import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react'
import HomeButton from './HomeButton';
import AddButton from './AddButton';
import CreateNewSite from './CreateNewSite';
import PopupForm from './PopupForm';

export default function AdminSites() {
    const [sites,setSites] = useState([{name:"Kamloops"},{name:"Kelowna"}])
    const [openCreateNewProjectPopup,setopenCreateNewProjectPopup] = useState(false)
    const [selectedProject,setSelectedProject] = useState(null)

    const handleCreateNewProjectPopup = ()=>{
        setopenCreateNewProjectPopup(!openCreateNewProjectPopup)
    }
  return (
   <Grid container>
     <Grid item> <HomeButton sx={{color:'green',fontSize:30,position:'relative',top:10}} onPress={()=>setSelectedProject(null)}/></Grid>
    <Grid item><AddButton onPress={()=>handleCreateNewProjectPopup()}/> </Grid>
    <PopupForm title={"Add New Site"} openForm={openCreateNewProjectPopup} onClose={handleCreateNewProjectPopup}><CreateNewSite/> </PopupForm>
    {sites.map((data)=>{
        return <Grid container sx={{padding:5,borderBottom:1}}>
            <Typography>{data.name}</Typography>
        </Grid>
    })}
   </Grid>
  )
}


