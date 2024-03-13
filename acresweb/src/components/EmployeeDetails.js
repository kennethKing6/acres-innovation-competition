import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WidthSpace from './WidthSpace';
import TasksUserList from './TasksUserList';

export default function EmployeeDetails({
  firstName='',
  lastName = '',
  employeeID = '',
  workType = '',
  employeeEmail = ''
}) {
  return (

    
    <Box sx={{ width: '100%',  }}>

     <Box sx={{ width: '100%', }}>
            </Box>

        <Typography variant="h3" gutterBottom>
       Employee Details 
      </Typography>

      <Box sx={{ width: '100%', height:70}}>
            </Box>
      


        <Typography variant="h5" gutterBottom>
        {firstName}
      </Typography>
      <WidthSpace/>

      <Typography variant="h5" gutterBottom>
        {lastName}
      </Typography>
      <WidthSpace/>
      

      <Typography variant="h5" gutterBottom>
        {employeeEmail}
      </Typography>
      <WidthSpace/>

      <Typography variant="h5" gutterBottom>
        {employeeID}
      </Typography>
      <WidthSpace/>

      <Typography variant="h5" gutterBottom>
        {workType}
      </Typography>
      <WidthSpace/>
    {employeeEmail?<TasksUserList email={employeeEmail}/>:<></>}
    </Box>
    );
  }