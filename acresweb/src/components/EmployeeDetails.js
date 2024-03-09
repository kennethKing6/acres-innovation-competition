import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WidthSpace from './WidthSpace';

export default function EmployeeDetails() {
  return (

    
    <Box sx={{ width: '100%', maxWidth: 500, marginLeft: 50}}>

     <Box sx={{ width: '100%', height:100}}>
            </Box>

        <Typography variant="h3" gutterBottom>
       Employee Details 
      </Typography>

      <Box sx={{ width: '100%', height:70}}>
            </Box>
      


        <Typography variant="h5" gutterBottom>
        FirstName
      </Typography>
      <WidthSpace/>

      <Typography variant="h5" gutterBottom>
        LastName
      </Typography>
      <WidthSpace/>
      

      <Typography variant="h5" gutterBottom>
        employeeEmail
      </Typography>
      <WidthSpace/>

      <Typography variant="h5" gutterBottom>
        EmployeeID
      </Typography>
      <WidthSpace/>

      <Typography variant="h5" gutterBottom>
        Employee Description
      </Typography>
      <WidthSpace/>

    </Box>
    );
  }