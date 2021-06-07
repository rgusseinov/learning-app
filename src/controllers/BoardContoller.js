import { generateTasks } from "../utils";
import { TaskController } from "./TasksContoller";

const SHOW_TASKS_COUNT = 3

const renderTasks = (container, tasks, onDataChange) => {
  return tasks.map((task) => {
    const taskController = new TaskController(container, onDataChange)
    taskController.render(task)
    return taskController
  })
}

export class BoardController {

  constructor(container){
    this._container = container
    this._tasks = []
    this._showedTaskControllers = []
    this._onDataChange = this._onDataChange.bind(this)
 
  }

  render(){
    const container = this._container.firstElementChild
  
    for (let i=0; i< SHOW_TASKS_COUNT; i++){
      const task = generateTasks()
      this._tasks.push(task)    
    }
      
    const newTasks = renderTasks(container, this._tasks, this._onDataChange)
    this._showedTaskControllers = this._showedTaskControllers.concat(newTasks)
     
  }

  _onDataChange(data, e){
    console.log(`Clicked on`, e)
  }

  
}
