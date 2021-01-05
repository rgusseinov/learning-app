import {getStorage, setStorage} from './Storage'

class Blocks {
  constructor(){
    this.storage = getStorage()
  }
  
  getBlocks(blockId, blockOrder, boardName, tasks){
    let orderedTaskList = []
    tasks.forEach(item => orderedTaskList[item.order] = { ...item})

    let taskList = orderedTaskList.map(task => {
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
      <div class="block" id="${blockId}" order="${blockOrder}" draggable="true">
        <nav class="panel">
          <p class="panel-heading">${boardName}
            <span class="icon has-text-info actionRemoveBlock"><i class="fas fa-trash"></i></span>
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
    // Если есть данные в localStorage то рисуем блоки и тасками
    let html = '' 
    let orderedBlocks = []
    orderedBlocks = this.storage.sort(compare)
    // console.log(orderedBlocks)

    if (orderedBlocks){
      orderedBlocks.forEach(board => {
        html += this.getBlocks(board.blockId, parseInt(board.order), board.boardName, board.tasks)
      })
    } 

    return html
  }
}

function compare(a, b){
  if (a.order > b.order) return 1
  if (a.order < b.order) return -1
  return 0
}

export default Blocks