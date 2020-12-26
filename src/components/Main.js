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
    })
    return html
  }

  render(){
    this.$el.innerHTML = this.getRoot()
    this.eventListeners()
  }

  eventListeners(){
    // Adding new task Block
    document.querySelector('.addBlock').addEventListener('click', handleNewBlock.bind(this))

    // Adding new task
    let searchInput = document.querySelectorAll('.addNewTask')
    searchInput.forEach(searchField => {
      searchField.addEventListener('keydown', (e) => {
        if (e.code == 'Enter'){
          let task = e.target.value
          // Get local storage and make it's clone
          // Add task item in new storage
          // Set new storage
          let currentBlockId = e.target.closest('.block').id
          let storage = this.storage.find(blocks => blocks.blockId == currentBlockId)
          storage.tasks.push({ id: storage.tasks.length + 1, name: task, order: storage.tasks.length + 1, deleted: false })
          
          let newArr = this.storage.map((item) => {
            if (item.blockId == currentBlockId) item = storage
            return item
          })
          
          // console.log(newArr)
          setStorage(newArr)
          location.reload()
        }
        
      })
    })
    

    // Drag and drop
    let taskItems = document.querySelectorAll('.panel a.panel-block')
    
    taskItems.forEach(item => {
      item.addEventListener("dragstart", handleDragstart)
      item.addEventListener("dragover", handleDragover)
      item.addEventListener("dragenter", handleDragenter)
      item.addEventListener("dragleave", handleDragleave, false)
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

function handleNewBlock(){
  
  let countBlocks = getStorage().length + 1
  let storage = getStorage()

  storage.push({
    blockId: countBlocks, boardName: `Board ${countBlocks}`, tasks: []
  })
  
  setStorage(storage)


  this.$el.insertAdjacentHTML('afterend', `
      <div class="block" id="">
        <nav class="panel">
          <p class="panel-heading">Board ${countBlocks}
            <span class="icon has-text-info">
              <i class="fas fa-trash"></i>
            </span>
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input add addNewTask" type="text" placeholder="Type task name">
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
    // console.log(this)
    this.style.opacity = '0.4'
    e.dataTransfer.setData('text/plain', this.innerHTML)
  }
}

function handleDragover(e){
    e.preventDefault()
}

function handleDragdrop(e){
  e.stopPropagation()
  let storage = getStorage()
  let newTasks = []
  let newArr = []

  if (dragEl != this){
    dragEl.style.opacity = '1'

    dragEl.innerHTML = this.innerHTML
    this.innerHTML = e.dataTransfer.getData('text')
    
    // Change order of task
    let currentBlock = this.closest('.block').querySelectorAll('nav a.panel-block')
    const currentBlockId = parseInt(this.closest('.block').id)
    let store = storage.find(blocks => blocks.blockId == currentBlockId)
    
 
    currentBlock.forEach((item, index) => {
      const taskName = item.textContent.trim()
      const taskId = item.id
      newTasks.push({id: taskId, name: taskName, order: index + 1, deleted: false})  

      // Change style
      item.classList.remove('over')
    })

    newArr = storage.map(item =>  {
      if (item.blockId == currentBlockId) {
        item.tasks = newTasks
      }
        return item          
    })

    setStorage(newArr)
  }


  return false
}

function handleDragend(e){ }

function handleDragenter(e){ 
  this.classList.add('over')
}

function handleDragleave(e){ 
  this.classList.remove('over')
}
  



// Remove

function handleRemoveTask(e){
  const storage = getStorage()
  const taskId = e.target.closest('.panel-block').id
  // Get local storage and make it's clone
  // Add task item in new storage
  // Set new storage

  // console.log(e.target)

    let currentBlockId = e.target.closest('.block').id
    let store = storage.find(blocks => blocks.blockId == currentBlockId)
    let removeTaskIndex = store.tasks.findIndex(item => item.id === taskId)
    store.tasks.splice(removeTaskIndex, 1)
 
    let newArr = storage.map(item =>  {
      if (item.blockId == currentBlockId) item = store
      return item          
    })

    e.target.closest('.panel-block').remove()
    // console.log(e.target.closest('.panel-block'))
    // console.log(removeTaskIndex)

    setStorage(newArr)
    // location.reload()
  

}

export default Main