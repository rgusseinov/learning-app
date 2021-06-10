import { Container } from "./components/container"
// import { Filters } from "./components/filters"
import { BoardController } from "./controllers/BoardContoller"
import { FilterController } from "./controllers/FilterController"
// import { generateFilters } from "./mock/filter"
import { Tasks } from "./models/task"
import { generateTasks, render, RenderPosition } from './utils'
const TASK_COUNT = 3

const tasks = generateTasks(TASK_COUNT)
const tasksModel = new Tasks()
tasksModel.setTasks(tasks)

const mainBlock = document.querySelector('#main')
const container = mainBlock

const containerBlock = new Container()
render(mainBlock, containerBlock, RenderPosition.BEFOREEND)


/* const filters = generateFilters()
render(mainBlock.firstElementChild, new Filters(filters), RenderPosition.AFTERBEGIN) */
const filterHeader = mainBlock.firstElementChild

const filterController = new FilterController(filterHeader, tasksModel)
filterController.render()

const boardController = new BoardController(container, tasksModel)
boardController.render()