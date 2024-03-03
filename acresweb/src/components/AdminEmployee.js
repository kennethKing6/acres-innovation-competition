import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import React, { useState } from 'react'

export default function AdminEmployee() {
    const [sites,setSites] = useState([{name:"Shubbam"},{name:"Paul"},{name:"Cornnor"}])
  return (
   <Grid container>
    {sites.map((data)=>{
        return <Grid container sx={{padding:5,borderBottom:1}}>
            <Typography>{data.name}</Typography>
        </Grid>
    })}
   </Grid>
  )
}


