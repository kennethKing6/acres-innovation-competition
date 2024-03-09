import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import HomeButton from './HomeButton';
import AddButton from './AddButton';
import PopupForm from './PopupForm';
import CreateNewProject from './CreateNewProject';
import TaskButton from './TaskButton';
import TaskManagement from './TaskManagement';

export default function AdminProjects() {
    const [sites,setSites] = useState([{name:"Roller Coaster"},{name:"Bike mounting"}])
    const [openCreateNewProjectPopup,setopenCreateNewProjectPopup] = useState(false)
    const [openCreateNewTaskPopup,setopenCreateNewTaskPopup] = useState(false)

    const [selectedProject,setSelectedProject] = useState(null)

    const handleCreateNewProjectPopup = ()=>{
        setopenCreateNewProjectPopup(!openCreateNewProjectPopup)
    }
    const handleCreateNewTaskPopup = ()=>{
        setopenCreateNewTaskPopup(!openCreateNewTaskPopup)
    }
  return ( 
   <Grid container>
    <Grid item> <HomeButton sx={{color:'green',fontSize:30,position:'relative',top:10}} onPress={()=>setSelectedProject(null)}/></Grid>
    <Grid item><AddButton onPress={()=>handleCreateNewProjectPopup()}/> </Grid>
    <Grid item><TaskButton onPress={()=>handleCreateNewTaskPopup()}/> </Grid>

    <PopupForm title={"Create New Project"} openForm={openCreateNewProjectPopup} onClose={handleCreateNewProjectPopup}><CreateNewProject/> </PopupForm>
    <PopupForm title={"Create New Task"} openForm={openCreateNewTaskPopup} onClose={handleCreateNewTaskPopup}><TaskManagement/> </PopupForm>

     {selectedProject?<Grid container sx={styles.page}><Typography >Projects Details goes here</Typography></Grid>:<></>}
    {!selectedProject && sites.map((data)=>{
        return <Grid container sx={{padding:5,borderBottom:1}}>
            <Typography>{data.name}</Typography>
        </Grid>
    })}
   </Grid>
  )
}

const styles = {
    page:{padding:5,borderBottom:1}
}


