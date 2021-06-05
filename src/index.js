import { Card } from "./components/card"
import { Container } from "./components/container"
import { Filters } from "./components/filters"
import { generateFilters } from "./mock/filter"
import { generateTasks, render } from './utils'

const TASK_COUNT = 3
const filters = generateFilters()

const mainBlock = document.querySelector('#main')
render(mainBlock, new Container().getElement(), `afterbegin`)

const filterHeader = mainBlock.firstElementChild
render(filterHeader, new Filters(filters).getElement(), `afterbegin`)

const container = mainBlock.firstElementChild
for (let i=0; i<TASK_COUNT; i++){
  const task = generateTasks(TASK_COUNT)
  render(container, new Card(task).getElement(), `beforeend`)
}

