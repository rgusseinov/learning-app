class Table {


  init(){

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