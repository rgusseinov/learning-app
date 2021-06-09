import { Container } from "./components/container"
import { Filters } from "./components/filters"
import { BoardController } from "./controllers/BoardContoller"
import { FilterController } from "./controllers/FilterController"
import { generateFilters } from "./mock/filter"
import { Tasks } from "./models/task"
import { generateTasks, render, RenderPosition } from './utils'

const TASK_COUNT = 3
const tasks = generateTasks(TASK_COUNT)
const tasksModel = new Tasks()
tasksModel.setTasks(tasks)

const mainBlock = document.querySelector('#main')
const containerBlock = new Container()
render(mainBlock, containerBlock, RenderPosition.BEFOREEND)


const filters = generateFilters()
const filterHeader = mainBlock.firstElementChild

const filterController = new FilterController(filterHeader, tasksModel)
filterController.render()
// render(filterHeader, new Filters(filters), `afterbegin`)


const container = mainBlock


const boardController = new BoardController(container, tasksModel)
boardController.render()