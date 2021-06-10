import { generateTasks } from "../utils";
import { EmptyTask, TaskController } from "./TasksContoller";

const SHOW_TASKS_COUNT = 3

const renderTasks = (container, tasks, onDataChange) => {
  return tasks.map((task) => {
    const taskController = new TaskController(container, onDataChange)
    taskController.render(task)
    return taskController
  })
}

export class BoardController {

  constructor(container, tasksModel){
    this._container = container
    this._tasks = []
    this._tasksModel = tasksModel
    this._showedTaskControllers = []
    this._onDataChange = this._onDataChange.bind(this)
 
  }

  render(){
    const container = this._container.firstElementChild
    

    const newTasks = renderTasks(container, this._tasksModel.getTasksAll(), this._onDataChange)
    this._showedTaskControllers = this._showedTaskControllers.concat(newTasks)
     
  }

  _onDataChange(taskController, oldData, newData){
    
    // New task
    if (oldData === EmptyTask){
      this._creatingTask = null

      if (newData === null){
        taskController.destroy()
        this._updateTasks(this._showingTasksCount)
      
      } else {
        // Add task
    
        this._tasksModel.addTask(newData)
        taskController.render(newData)

/*         if (this._showingTasksCount % SHOWING_TASKS_COUNT_ON_BUTTON === 0){
          const destroyedTask = this._showedTaskControllers.pop()
          destroyedTask.destroy()
        } */

        this._showedTaskControllers = [].concat(taskController, this._showedTaskControllers)
        // this._showingTasksCount = this._showedTaskControllers.length

        // this._renderLoadMoreButton()
      }
    } else if (newData === null){

      // Removing task
      this._tasksModel.removeTask(oldData.id)
      this._updateTasks(this._showingTasksCount)

    } else {
      // Update task
      const isSuccess = this._tasksModel.updateTask(oldData.id, newData)
      if (isSuccess){
        taskController.render(newData)
      }      

    }



  }

  
}
