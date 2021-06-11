import { Container } from "./components/container"
import { BoardController } from "./controllers/BoardContoller"
import { FilterController } from "./controllers/FilterController"
import { Tasks } from "./models/task"
import { API } from "./services/api"
import { render, RenderPosition } from './utils'

const api = new API()
const tasksModel = new Tasks()

const mainBlock = document.querySelector('#main')
const container = mainBlock

const containerBlock = new Container()
render(mainBlock, containerBlock, RenderPosition.BEFOREEND)

const filterHeader = mainBlock.firstElementChild
const filterController = new FilterController(filterHeader, tasksModel)

const boardController = new BoardController(container, tasksModel)
// const data = await apiService.getQuize(this.activeCategory)

api.getTasks().
  then((tasks)=> {
    tasksModel.setTasks(tasks)
    filterController.render()
    boardController.render()
  })