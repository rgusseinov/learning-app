import { Abstract } from "./abstract"
import { parsePrefixId } from '../utils'

const FILTER_ID_PREFIX = `filter__`;


const createFilterMarkup = (item, key, isChecked) => {
  // return (`<li><a href="#" class="filter filter_${item.name}">${item.name} (${item.count}) - Checked = ${isChecked ? `Yes` : `No`} </a></li>`)

  return (`<li>
            <a href="#" class="filter">
              <input type="radio" id="filter__${key}" class="filter__input visually-hidden" name="filter" ${isChecked}/>
              <label for="filter__${key}" class="filter__label"> 
                ${item.name} <span class="filter__${key}-count">${+item.count}</span>
              </label>
            </a>
          </li>`)

}

const createFilterTemplate = (filters) => {

  const filtersKeys = Object.keys(filters)
  const filtersMarkup = filtersKeys
      .map((key) => createFilterMarkup(filters[key], key, filters[key].checked)).join(``);
      
  return `<nav>
          <div class="nav-wrapper">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              ${filtersMarkup}
            </ul>
          </div>
        </nav>`
}



export class Filters extends Abstract {

  constructor(filters, currentFilterType){
    super()
    this._filters = filters
    this._currentFilter = currentFilterType
    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);

  }

  getTemplate(){
    return createFilterTemplate(this._filters, this._currentFilter)
  }


  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.value);
  }


  setFilterChangeHandler(onFilterChange) {
    const container = this.getElement()
    this._callback.filterTypeChange = onFilterChange;


    container.addEventListener(`change`, (evt) => {
      const currentFilter = parsePrefixId(FILTER_ID_PREFIX, evt.target.id);

      // console.log(`evt`, currentFilter)
      onFilterChange(currentFilter);
    });


  }



}