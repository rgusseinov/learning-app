class Blocks {

/*   constructor($root, options = {}){
    super($root, options.listeners)
    this.name = options.name
  }
   */

  init(){

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