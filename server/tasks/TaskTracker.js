const ArdruinoDataInterface = require('../ardruinoControllers/ardruinoDataInterface')
const TaskTrackerDatabase = require('../database/TaskTrackerDatabase')
const HashActionsController = require('../HashActions/HashActionsController')

module.exports = class TaskTracker{
    static createTask(data){
        const timestamp = Date.now()
        const id = timestamp + Math.random() + 1 + timestamp
        TaskTrackerDatabase[id] = {
            email:data.email,
            title:data.title,
            description:data.description,
            managerEmail:data.managerEmail,
            task:data.task,
            createdAt:timestamp,
            completed:null,
            ...data
        }
       const hashedTask =  HashActionsController.mapHashToTask(id)

       //Push the task on the ardruino
       ArdruinoDataInterface.inputData = hashedTask
    }
    static getTaskByUser(email){
         let currentUserTask = null;
        const reverTask = this.listTasks()
        for(let i = 0; i < reverTask.length; i++){
            if(reverTask[i].email === email){
                currentUserTask = reverTask[i]
                break;
            }
        }
        return currentUserTask
    }
    static listTasks(){
        return  Object.values(TaskTrackerDatabase).reverse()
    }

    static getTaskByEmail(email){
        const result = []
        this.listTasks().forEach((task)=>{
            if(task && task['email'] === email)result.push(task)
        })
    return result
    }
    static generateReport(){
        const tasks =  this.listTasks()

        return tasks.map((data,index)=>{
            const {email,title,description,managerEmail,task,createdAt,completed,project:{createdAt:projectDate,name,site}} = data
          
            
            return [index,email, title, timestampToHourFormat(createdAt), timestampToHourFormat(projectDate),site,name,task,description]
        })
    }
}

function timestampToHourFormat(timestamp){
    const date = new Date(timestamp);
    return  date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}