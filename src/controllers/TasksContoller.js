import { Card } from "../components/card"
import { render, RenderPosition, replace } from "../utils"

export const EmptyTask = {
  id: null,
  title: ``,
  isFavorite: false,
  isArchive: false
}



export class TaskController {


  constructor(container, onDataChange){
    this._container = container
    this._taskComponent = null

    this._onDataChange = onDataChange
   
  }

  render(task){
    // const container = this._container
    const oldTaskComponent = this._taskComponent
    this._taskComponent = new Card(task)
    
    this._taskComponent.setClickHandler(() => {
      this._onDataChange(this, task, Object.assign({}, task, {
        isArchive: !task.isArchive
      }))
    })
    
    if (oldTaskComponent){
      replace(this._taskComponent, oldTaskComponent)
    } else {
      render(this._container, this._taskComponent, RenderPosition.BEFOREEND)
    }
    
  }
  

 
}
