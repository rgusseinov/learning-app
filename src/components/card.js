import { Abstract } from "./abstract"

const createTaskTemplate = (task) => {
  const {id, title, isCompleted} = task
 
  // console.log(task)
  return `<div class="card" data-id="${id}">
            <div class="card-content">
              <p> ${title} </p>
              ${isCompleted ? `Yes` : `No`}
            </div>
            <div class="card-tabs">
              <ul class="tabs tabs-fixed-width">
                <li class="tab startTask"><a class="active" href="#test4">Начать </a></li>
                <li class="tab completeTask"><a href="#test5">Завершить</a></li>
                <li class="tab archiveTask"><a href="#test6">В Архив </a></li>
              </ul>
            </div>
          </div>`
}


export class Card extends Abstract {
 
  constructor(task){
    super()
    this._task = task

  }

  getTemplate(){
    return createTaskTemplate(this._task)
  }

  setStartClickHandler(handler){
    this.getElement().querySelector(`.startTask`).addEventListener(`click`, handler)
  }

  setCompleteClickHandler(handler){
    this.getElement().querySelector(`.completeTask`).addEventListener(`click`, handler)
  }

  setArchiveClickHandler(handler){
    this.getElement().querySelector(`.archiveTask`).addEventListener(`click`, handler)
  }


  
}