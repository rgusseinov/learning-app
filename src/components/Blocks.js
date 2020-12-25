import {getStorage, setStorage} from './Storage'

class Blocks {
  constructor(){
    this.storage = getStorage()
/*     this.data = [

        {blockId: 1, boardName: 'Task list', tasks: [
          { id: 1, name: 'Create project file', deleted: false },
          { id: 2, name: 'Close ticket', deleted: false },
          { id: 3, name: 'Fix GEMS issue', deleted: false }
        ]},

        {blockId: 2, boardName: 'In Progress List', tasks: [
          { id: 1, name: 'Discussing', deleted: false },
        ]},

    ]
    setStorage(this.data) */
  }
  

  getBlocks(blockId, boardName, tasks){
    let taskList = tasks.map(task => {
      return `
      <a class="panel-block" id="${task.id}" draggable="true">
        <span class="panel-icon">
          <i class="fas fa-arrows" aria-hidden="true"></i>
        </span> ${task.name}

        <span class="panel-icon icon-trash actionRemoveTask">
          <i class="fas fa-trash"></i>
        </span>

      </a>      
      `
    })
    return `
      <div class="block" id="${blockId}">
        <nav class="panel">
          <p class="panel-heading">${boardName}
            <span class="icon has-text-info">
              <i class="fas fa-trash"></i>
            </span>
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input addNewTask" type="text" placeholder="Type task name">
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
    // console.log(`storage`, this.storage)
    
    if (this.storage){
      this.storage.forEach(board => {
        html += this.getBlocks(board.blockId, board.boardName, board.tasks)
      })
    } 

    return html
  }
}

export default Blocks