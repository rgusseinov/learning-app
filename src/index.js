import { Container } from "./components/container"
import { Filters } from "./components/filters"
import { BoardController } from "./controllers/BoardContoller"
import { generateFilters } from "./mock/filter"
import { render, RenderPosition } from './utils'


const mainBlock = document.querySelector('#main')
const containerBlock = new Container()
render(mainBlock, containerBlock, RenderPosition.BEFOREEND)


const filters = generateFilters()
const filterHeader = mainBlock.firstElementChild
render(filterHeader, new Filters(filters), `afterbegin`)

const container = mainBlock

const boardController = new BoardController(container)
boardController.render()
