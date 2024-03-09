import React, { useEffect, useState } from 'react'
import {TextField,Button, Grid,Card,CardActions,CardContent,Typography,} from '@mui/material'
import TopMarginSpace from './TopSpace'
import { API_URL } from '../api/Endpoints'
import PopupForm from './PopupForm';
import HomeButton from './HomeButton';
import AddButton from './AddButton';
export default function CreateNewTask({
  onTaskAdded=()=>{},
  onBackHome = ()=>{}
}) {


    const [title,setTitle] = useState();
    const [employeeEmail,setEmployeeEmail] = useState();
    const [managerEmail,setManagerEmail] = useState();
    const [task,setTask] = useState();
    const [taskDescription,setTaskDescription] = useState();

    const [openAddNewEmployeePopup,setOpenAddNewEmployeePopup] = useState(false)

    const handleNewEmployeePopup = ()=>{
        setOpenAddNewEmployeePopup(!openAddNewEmployeePopup)
    }

 

    async function addNewtask(){
      const newTask = {
        email:employeeEmail,
        title:title,
        description:taskDescription,
        managerEmail:managerEmail,
        task:task
    }
      await fetch(`${API_URL}/add-task`,{
           method:"POST",
           body:JSON.stringify(newTask),
           headers:{
               "content-type":"application/json"
           }
       })
       setTitle('')
       setEmployeeEmail('')
       setManagerEmail('')
       setTask('')
       setTaskDescription('')
       onTaskAdded(newTask)
      
   }

  return (
    <Grid container>
       <Grid item> <HomeButton sx={{color:'green',fontSize:30,position:'relative',top:10}} onPress={()=>onBackHome(null)}/></Grid>
    <Grid item><AddButton onPress={()=>handleNewEmployeePopup()}/> </Grid>
      <PopupForm title={"Add New Task"} openForm={openAddNewEmployeePopup} onClose={handleNewEmployeePopup} onSubmit={async ()=>{
        await addNewtask();
    }}>
      <Grid container   >

      <TextField sx={styles.textField} id="outlined-basic" value={title} label="Title" variant="outlined" onChange={(e)=>setTitle(e.target.value)}/>
    <TopMarginSpace/>
    <TextField sx={styles.textField} id="outlined-basic" value={employeeEmail} type='email' label="Employee Email" variant="outlined" onChange={(e)=>setEmployeeEmail(e.target.value)}/>
    <TopMarginSpace/>
    <TextField sx={styles.textField} id="outlined-basic" value={managerEmail} type='email' label="Managers Email" variant="outlined" onChange={(e)=>setManagerEmail(e.target.value)}/>
    <TopMarginSpace/>
    <TextField sx={styles.textField} id="outlined-basic" value={task} label="Task" variant="outlined" onChange={(e)=>setTask(e.target.value)}/>
    <TopMarginSpace/>
    <TextField 
    sx={styles.textField}
        value={taskDescription}
        onChange={(e)=>setTaskDescription(e.target.value)}
          id="outlined-multiline-static"
          label="Task Description"
          multiline
          rows={4}
        />
    <TopMarginSpace/>
    <TopMarginSpace/>
   </Grid>
    </PopupForm>
    </Grid>
  )
}

const styles = {
  textField:{
    width:'90%'
  }
}
