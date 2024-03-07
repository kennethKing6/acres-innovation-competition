import React, { useState } from 'react'
import Card from '@mui/material/Card';
import AdminTaskCategory from './AdminTaskCategory';
import { Grid } from '@mui/material';
import AdminProjects from './AdminProjects';
import AdminSites from './AdminSites';
import AdminEmployee from './AdminEmployee';
import AddButton from './AddButton';
import PopupForm from './PopupForm';
import TaskManagement from './TaskManagement';


const PROJECTS_CATEGORY =  'Projects'
const EMPLOYEE_CATEGORY =  'Employee'
const SITE_CATEGORY =  'Site'
export default function AdminDashboard() {

    const [selected,setSelected]  = useState(PROJECTS_CATEGORY)

    const category = [
        {name:'Site',bgColor:'#103778',color:'white',onPress:()=>setSelected(SITE_CATEGORY)},
        {name:'Projects',bgColor:'#015958',color:'white',onPress:()=>setSelected(PROJECTS_CATEGORY)},
        {name:'Employee',bgColor:'#D94F04',color:'white',onPress:()=>setSelected(EMPLOYEE_CATEGORY)},
    ]
  return (
    <Grid container>
      
    {category.map(({color,name,bgColor,onPress})=>{{
        return <Grid item sx={{flex:1,padding:5}}><AdminTaskCategory onPress={onPress} selected={name === selected} title={name} bgColor={bgColor} textColor={color}/></Grid>
    }})}
        <Grid container  sx={{alignItems:'center',justifyContent:'center'}} >

            <Grid item sx={{width:'60%',}}>
            {selected === PROJECTS_CATEGORY?<AdminProjects/>:<></>}
            {selected === SITE_CATEGORY?<AdminSites/>:<></>}
            {selected === EMPLOYEE_CATEGORY?<AdminEmployee/>:<></>}
            </Grid>
        </Grid>
    </Grid>
  )
}
