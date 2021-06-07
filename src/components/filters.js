const createFilterMarkup = (name, count) => {
  return (`<li><a href="">${name} <span class="badge">${count}</span> </a></li>`)
}

const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map(item => createFilterMarkup(item.name, item.count)).join('')

  return `<nav>
          <div class="nav-wrapper">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              ${filtersMarkup}
            </ul>
          </div>
        </nav>`
}



export class Filters {

  constructor(filters){
    this._filters = filters
  }

  getElement(){
    return createFilterTemplate(this._filters)
  }

}