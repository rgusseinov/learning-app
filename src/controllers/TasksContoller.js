import { Card } from "../components/card"
import { render } from "../utils"

export class TaskController {


  constructor(container, onDataChange){
    this._container = container
    this._taskComponent = null

    this._onDataChange = onDataChange
   
  }

  render(task){
    const container = this._container
    this._taskComponent = new Card(task)
    
    
    
    this._taskComponent.setButtonStatusClickHandler(() => {
      this._onDataChange(this, task)
      // console.log(`dsfsfd`)
    })
    
    render(container, this._taskComponent.getTemplate(), `beforeend`)
   
  }
  

 
}
