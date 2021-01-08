import { Component } from "./Component"

class Table extends Component {

  constructor($root){
    super($root, {
      name: 'Table',
      listeners: ['input']
    })
  }
  

  onInput(e){
    console.log('Table Input', e.target.value)
  }


  toHTML(){
    return `
      <div class="table-container">
        <textarea type="text" class="table-input textarea" placeholder="Table name here"> </textarea>
      </div>
    `
  }
}


export default Table