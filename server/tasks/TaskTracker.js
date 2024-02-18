const TaskTrackerDatabase = require('../database/TaskTrackerDatabase')

module.exports = class TaskTracker{
    static createTask(email,title,descripton,managerEmail){
        const id = Date.now() + Math.random() + 1 + Date.now()
        TaskTrackerDatabase[id] = {
            email,
            title,
            descripton,
            managerEmail
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