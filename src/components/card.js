export class Card {
 
  constructor(task){
    this._task = task
  }

    getElement(){
      const id = this._task.id
      const title = this._task.title

      return `
        <div class="card" data-id="${id}">

          <div class="card-content">
            <p> ${title} </p>
          </div>

          <div class="card-tabs">
            <ul class="tabs tabs-fixed-width">
              <li class="tab"><a href="#test4">Начать </a></li>
              <li class="tab"><a class="active" href="#test5">Завершить</a></li>
              <li class="tab"><a href="#test6">В Архив </a></li>
            </ul>
          </div>

 
        </div>`
    }


}