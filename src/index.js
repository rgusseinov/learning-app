import { Container } from "./components/container"
import { Filters } from "./components/filters"
import { BoardController } from "./controllers/BoardContoller"
import { generateFilters } from "./mock/filter"
import { render } from './utils'


const mainBlock = document.querySelector('#main')
render(mainBlock, new Container().getElement(), `afterbegin`)


const filters = generateFilters()
const filterHeader = mainBlock.firstElementChild
render(filterHeader, new Filters(filters).getElement(), `afterbegin`)

const container = mainBlock

const boardController = new BoardController(container)
boardController.render()
