import { Component } from "./Component"

class Blocks extends Component {

  constructor($root){
    super($root, {
      name: 'Block',
      listeners: ['input', 'click']
    })
  }
  

  onInput(e){
    console.log('Block Input', e.target.value)
  }

  onClick(e){
    // console.log(`Block Clicked`, e.target)
  }


  toHTML(){
    return `
      <div class="block-container">
        <input type="text" class="block-input input" placeholder="Block name here">
      </div>
    `
  }
}


export default Blocks