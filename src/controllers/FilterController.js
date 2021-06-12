import { Filters } from '../components/filters';
import { FilterType, getTasksByFilter, render, replace, RenderPosition } from '../utils'

const filters = {
  [FilterType.ALL]: {
    name: `All`,
    count: null,
    checked: false,
  },
  [FilterType.PROGRESS]: {
    name: `Progress`,
    count: null,
    checked: false,
  },
  [FilterType.COMPLETED]: {
    name: `Completed`,
    count: null,
    checked: false,
  },
  [FilterType.FAVORITES]: {
    name: `Favorites`,
    count: null,
    checked: false,
  },
  [FilterType.ARCHIVE]: {
    name: `Archive`,
    count: null,
    checked: false,
  },
};


export class FilterController {

  constructor(container, tasksModel){
    this._container = container
    this._tasksModel = tasksModel

    this._filtersComponent = null
    this._currentFilter = FilterType.ALL

    this._onFilterChange = this._onFilterChange.bind(this)
    this._onDataChange = this._onDataChange.bind(this)
    this._tasksModel.setDataChangeHandler(this._onDataChange)

  }


  render(){
    const allTasks = this._tasksModel.getTasksAll()    
    this._updateFilters(allTasks)
    
    if (!this._filtersComponent) {

      this._filtersComponent = new Filters(filters)
      this._filtersComponent.setFilterChangeHandler(this._onFilterChange)
      render(this._container, this._filtersComponent, RenderPosition.BEFOREEND)

    } else {

      const oldComponent = this._filtersComponent
      this._filtersComponent = new Filters(filters)
      this._filtersComponent.setFilterChangeHandler(this._onFilterChange)
      replace(this._filtersComponent, oldComponent)

    }
  }

 
  _onFilterChange(filterType){
    this._tasksModel.setFilter(filterType); // Если фильтр изменился то уведомляем всех подписчиков
    this._currentFilter = filterType;
  }


  _onDataChange(){
    this.render()
  }

  _updateFilters(tasks) {
    const filterTypes = Object.keys(filters);
    filterTypes.forEach((type) => {
      filters[type].count = getTasksByFilter(tasks, type).length;
      filters[type].checked = type === this._currentFilter;
    });
  }

}