import { Abstract } from "./abstract"

const createFilterMarkup = (item, count) => {
   
  return (`<li><a href="#">${item.name} <span class="badge">${item.count}</span> </a></li>`)
}

const createFilterTemplate = (filters) => {



  const filtersKeys = Object.keys(filters)
  const filtersMarkup = filtersKeys
      .map((key) => createFilterMarkup(filters[key], key, filters[key].checked))
      .join(``);


  return `<nav>
          <div class="nav-wrapper">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              ${filtersMarkup}
            </ul>
          </div>
        </nav>`

 
 
}



export class Filters extends Abstract {

  constructor(filters){
    super()
    this._filters = filters
  }

  getTemplate(){
    return createFilterTemplate(this._filters)
  }

  setFilterChangeHandler(){

  }

}