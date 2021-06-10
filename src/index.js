import { Container } from "./components/container"
import { BoardController } from "./controllers/BoardContoller"
import { FilterController } from "./controllers/FilterController"
import { Tasks } from "./models/task"
import { API } from "./services/api"
import { generateTasks, render, RenderPosition } from './utils'
const TASK_COUNT = 3


const api = new API()


console.log(api.getTasksAll())



/* const tasks = generateTasks(TASK_COUNT)
const tasksModel = new Tasks()
tasksModel.setTasks(tasks)

const mainBlock = document.querySelector('#main')
const container = mainBlock

const containerBlock = new Container()
render(mainBlock, containerBlock, RenderPosition.BEFOREEND)


const filterHeader = mainBlock.firstElementChild
const filterController = new FilterController(filterHeader, tasksModel)
filterController.render()

const boardController = new BoardController(container, tasksModel)
boardController.render()

api.getTasks().
  then((tasks)=> {
    tasksModel.setTasks(tasks)
    boardController.render()
  }) */