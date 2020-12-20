class Blocks {

  
  getBlocks(boardName, tasks){

    let taskList = tasks.map(task => {
      return `
      <a class="panel-block" id="${task.id}">
        <span class="panel-icon">
          <i class="fas fa-book" aria-hidden="true"></i>
        </span> ${task.name}
      </a>      
      `
    })
    return `
      <div class="block">
        <nav class="panel">
          <p class="panel-heading">${boardName}
            <span class="icon has-text-info">
              <i class="fas fa-trash"></i>
            </span>
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input add" type="text" placeholder="Type task name">
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          ${taskList.join('')}
        </nav>
    </div>
    `
  }


  addBlock(){
    return `
      <div class="block">
        <nav class="panel">
          <p class="panel-heading">New boards 1
            <span class="icon has-text-info">
              <i class="fas fa-trash"></i>
            </span>
          </p>
        </nav>
    </div>
    `
  }

  toHTML(){
    let html = ''
    // Если есть данные в localStorage то рисуем блоки и тасками
    let storage = 
      [
        {blockId: 1, boardName: 'Task list', tasks: [
          { id: 1, name: 'Create project file', deleted: false },
          { id: 2, name: 'Close ticket', deleted: false },
          { id: 3, name: 'Fix GEMS issue', deleted: false }
        ]}
      ]

    
    if (storage){
      
      storage.forEach(board => {
        html += this.getBlocks(board.boardName, board.tasks)
      })

    } 

    return html
  }
}

export default Blocks