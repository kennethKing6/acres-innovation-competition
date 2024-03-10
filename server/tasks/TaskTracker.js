const TaskTrackerDatabase = require('../database/TaskTrackerDatabase')

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
}