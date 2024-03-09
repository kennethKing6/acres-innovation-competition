import React, { useEffect, useState } from 'react'
import {TextField,Button, Grid,Card,CardActions,CardContent,Typography,} from '@mui/material'
import TopMarginSpace from './TopSpace'
import { API_URL } from '../api/Endpoints'
export default function CreateNewEmployee() {

    const [FirstName,setFirstName] = useState();
    const [LastName,setLastName] = useState();
    const [employeeEmail,setEmployeeEmail] = useState();
    const [Password,setPassword] = useState();
    const [EmployeeID,setEmployeeID] = useState();
    const [EmployeeIDDescription,setEmployeeIDDescription] = useState();

    const [EmployeeIDs,setEmployeeIDs] = useState([])

    useEffect(()=>{
        getEmployeeIDs().then((data)=>setEmployeeIDs([...data])).catch()
    },[])

    async function getEmployeeIDs(){
        const response = await fetch(`${API_URL}/EmployeeIDs`)
        const json = await response.json()
        const {data} =  json
        return data
    }

    async function addNewEmployeeID(){
       await fetch(`${API_URL}/add-EmployeeID`,{
            method:"POST",
            body:JSON.stringify({
                email:employeeEmail,
                FirstName:FirstName,
                description:EmployeeIDDescription,
                Password:Password,
                EmployeeID:EmployeeID
            }),
            headers:{
                "content-type":"application/json"
            }
        })
        setFirstName('')
        setEmployeeEmail('')
        setPassword('')
        setEmployeeID('')
        setEmployeeIDDescription('')
       
    }
 /**
     * 
     * @param {object} newUser 
     * @param {string} newUser.firstName
     * @param {string} newUser.lastName
     * @param {string} newUser.email
     * @param {string} newUser.password
     * @param {string} newUser.employeeID
     */
  return (
    <Grid container  >
    <TextField sx={styles.textField} id="outlined-basic"  value={FirstName} label="First Name" variant="outlined" onChange={(e)=>setFirstName(e.target.value)}/>
    <TopMarginSpace/>
    <TextField sx={styles.textField} id="outlined-basic"  value={LastName} label="Last Name" variant="outlined" onChange={(e)=>setLastName(e.target.value)}/>
    <TopMarginSpace/>
    <TextField sx={styles.textField} id="outlined-basic" value={employeeEmail} type='email' label="Employee Email" variant="outlined" onChange={(e)=>setEmployeeEmail(e.target.value)}/>
    <TopMarginSpace/>
    <TextField sx={styles.textField} id="outlined-basic" value={EmployeeID} label="EmployeeID" variant="outlined" onChange={(e)=>setEmployeeID(e.target.value)}/>
    <TopMarginSpace/>
    <TextField sx={styles.textField} id="outlined-basic" value={Password} type='password' label="Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)}/>
    <TopMarginSpace/>
   
   
    </Grid>
  )
}

const styles = {
  textField:{
    width:'90%'
  }
}
