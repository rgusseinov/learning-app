import { FilterType, getTasksByFilter } from "../utils"

export class Tasks {

  constructor(tasks){
    this._tasks = tasks
    this._activeFilterType = FilterType.ALL // Текущий выбранный фильтр

    // this._callHandlers = null
    this._dataChangeHandlers = []
    this._filterChangeHandlers = [] // Callback на изминения фильтров. Чтобы счетчик менялся
    
  }


  setTasks(tasks){    
    this._tasks = Array.from(tasks)
    this._callHandlers(this._dataChangeHandlers);
  }
  
  getTasks(){
    return getTasksByFilter(this._tasks, this._activeFilterType)
  }
 


  getTasksAll(){
    return this._tasks
  }

  setDataChangeHandler(handler){
    this._dataChangeHandlers.push(handler)
  }

  setFilterChangeHandler(handler){
    this._filterChangeHandlers.push(handler)
  }
  

  // Подписываться снаружи на изминения фильтров
  setFilter(filterType){
    this._activeFilterType = filterType
    // console.log(this._filterChangeHandlers)
    this._callHandlers(this._filterChangeHandlers) // Вызываем массив с функциями
  }

  // Observer
  _callHandlers(handlers) {
    // console.log(`handlers`, handlers)
    handlers.forEach((handler) => handler());
  }

  updateTask(id, task){
    const index = this._tasks.findIndex((it) => it.id === id)
    if (index === -1) return false
    this._tasks = [].concat(this._tasks.slice(0, index), task, this._tasks.slice(index + 1))
    this._callHandlers(this._dataChangeHandlers)
    return true 
  }


}