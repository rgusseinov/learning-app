import {getStorage, setStorage} from './Storage'

class Main {
  constructor(selector, options){
    this.$el = document.querySelector(selector)
    this.components = options.components || []
    this.storage = getStorage()
  }

  getRoot(){
    let html = ''
    this.components.forEach(Component => {
      let c = new Component()
      html += c.toHTML()
    });
    return html
  }

  render(){
    this.$el.innerHTML = this.getRoot()
    this.eventListeners()
  }

  eventListeners(){
    // Adding new task Block
    document.querySelector('.addBlock').addEventListener('click', handleClick.bind(this))

    // Adding new task
    document.querySelector('.addNewTask').addEventListener('keydown', (e) => {
      if (e.code == 'Enter'){
        let task = e.target.value
        // Get local storage and make it's clone
        // Add task item in new storage
        // Set new storage
        let currentBlockId = e.target.closest('.block').id
        let storage = this.storage.find(blocks => blocks.blockId == currentBlockId)
        storage.tasks.push({ id: storage.tasks.length + 1, name: task, deleted: false })
        
        let newArr = this.storage.map((item, index) =>  {
          if (item.blockId == currentBlockId) item = storage
          return item          
        })
        
        setStorage(newArr)
      }
    })

    // Drag and drop
    let taskItems = document.querySelectorAll('.panel a.panel-block')
    
    taskItems.forEach(item => {
      // console.log(`item`, item)
      
      item.addEventListener("dragstart", handleDragstart)
      item.addEventListener("dragover", handleDragover)
      item.addEventListener("drop", handleDragdrop)
      item.addEventListener("dragend", handleDragend)
    })


    // Remove task item
    taskItems = document.querySelectorAll('.actionRemoveTask')
    taskItems.forEach(item => {
      item.addEventListener('click', handleRemoveTask.bind(this))
    })

  }

}

function handleClick(){
  this.$el.insertAdjacentHTML('afterend', `
      <div class="block">
        <nav class="panel">
          <p class="panel-heading">Board 2
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
        </nav>
      </div>
  `)
}

let dragEl = null

function handleDragstart(e){
  dragEl = this
  if (e.target.classList.contains('panel-block')){
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain', this.innerHTML)
  }
}

function handleDragover(e){
    e.preventDefault()
}

function handleDragdrop(e){
  e.stopPropagation()

  if (dragEl != this){
    dragEl.innerHTML = this.innerHTML
    this.innerHTML = e.dataTransfer.getData('text')
  }

  return false
}

function handleDragend(e){ }

// Remove

function handleRemoveTask(e){
  const storage = getStorage()
  const taskId = e.target.closest('.panel-block').id
  e.target.closest('.panel-block').remove()

  
  let task = e.target.closest('.block')
  console.log(task)

  // Get local storage and make it's clone
  // Add task item in new storage
  // Set new storage
  // let currentBlockId = e.target.closest('.block').id
/*   let storage = this.storage.find(blocks => blocks.blockId == currentBlockId)
  storage.tasks.push({ id: storage.tasks.length + 1, name: task, deleted: false })
  
  let newArr = this.storage.map((item, index) =>  {
    if (item.blockId == currentBlockId) item = storage
    return item          
  })
  
  setStorage(newArr)
 */

  
  // console.log(storage)
}

export default Main