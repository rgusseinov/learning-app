export class Tasks {

  constructor(tasks){
    this._tasks = tasks
    // this._activeFilterType = FilterType.ALL

    // this._callHandlers = null
    this._dataChangeHandlers = []
    // this._filterChangeHandlers = []
    
  }


  setTasks(tasks){
    this._tasks = Array.from(tasks)
    this._callHandlers(this._dataChangeHandlers);
  }
/* 

  getTasks(){
    return getTasksByFilter(this._tasks, this._activeFilterType)
  }
 */

  setCurrentFilter(){
    
  }

  getTasksAll(){
    return this._tasks
  }

  setDateChangeHandler(handler){
    this._dataChangeHandlers.push(handler)
  }
 
  
  updateTask(id, task){ 
    const index = this._tasks.findIndex((it) => it.id === id)
    if (index === -1) return false
    this._tasks = [].concat(this._tasks.slice(0, index), task, this._tasks.slice(index + 1))
    this._callHandlers(this._dataChangeHandlers)
    return true 
  }

  _callHandlers(handlers) {
    handlers.forEach((handler) => handler());
  }


}