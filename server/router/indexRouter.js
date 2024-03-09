const express = require('express');
const TaskTracker = require('../tasks/TaskTracker');
const { EmployeeRegistration } = require('../registration/employeeRegistration');
const EmployeeDatabase = require('../database/EmployeeDatabase');
const { ManagerRegistration } = require('../registration/adminRegistration');
const SitesTracker = require('../workSites/SitesTracker');
const WorkSitesDatabase = require('../database/WorkSitesDatabase');
const ProjectsTracker = require('../projects/ProjectsTracker');
const ProjectsDatabase = require('../database/ProjectsDatabase');

const router = express.Router()

// -------------- Tasks ----------------


router.post('/add-task',(req,res)=>{
    const todo = req.body
    console.log('%%%%%%%',todo)
    TaskTracker.createTask(
        todo.email,
        todo.title,
        todo.description,
        todo.managerEmail,
        todo.task
    )
    res.status(200);
    res.send({
        message:'success'
    })
})

router.get('/tasks',(req,res)=>{
    const tasks = TaskTracker.listTasks();
    console.log('YEAHHHHHH',tasks)

    res.status(200);
    res.json({
        message:'success',
        data:tasks
    })

})

// -------------- Employee ----------------


router.post('/add-EmployeeID',(req,res)=>{
     EmployeeRegistration.createEmployee(req.body);
     console.log(EmployeeDatabase)

    res.status(200);
    res.json({
        message:'success',
    })

})

router.get('/list-Employees',(req,res)=>{
    console.log(EmployeeDatabase)

   res.status(200);
   res.json({
       message:'success',
       data:    ManagerRegistration.listEmployees()

   })

})

// -------------- Sites ----------------
router.post('/add-site',(req,res)=>{
    SitesTracker.createSite(req.body)
    console.log('SItes database',WorkSitesDatabase)
    res.status(200);
    res.send({
        message:'success'
    })
})
router.get('/list-sites',(req,res)=>{
    
    res.status(200);
    res.send({
        message:'success',
        data:SitesTracker.listSites()
    })
})

// -------------- Projects ----------------
router.post('/add-project',(req,res)=>{
    ProjectsTracker.createProject(req.body)
    console.log('project database',ProjectsDatabase)
    res.status(200);
    res.send({
        message:'success'
    })
})
router.get('/list-projects',(req,res)=>{
    
    res.status(200);
    res.send({
        message:'success',
        data:ProjectsTracker.listProjects()
    })
})

exports.indexRouter = router;

