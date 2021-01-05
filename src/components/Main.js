import {getStorage, setStorage} from './Storage'
import {getEditView} from './Templates'

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

    // Delegate event
    document.querySelector('body').addEventListener('keydown', globalKey)

    // Block name quick edit
    document.querySelector('body').addEventListener('dblclick', handleUserDblCLick)

    // Block quick edit save
    document.querySelector('body').addEventListener('click', handleItemSave)

    // Adding new task Block
    document.querySelector('.addBlock').addEventListener('click', handleNewBlock.bind(this))

    // Remove Block
    let taskBlocks = document.querySelectorAll('.actionRemoveBlock')
    taskBlocks.forEach(block => {
      block.addEventListener('click', handleRemoveBlock)
    })
    

    // Drag and drop of tasks
    let taskItems = document.querySelectorAll('.panel a.panel-block')
    
    taskItems.forEach(item => {
      item.addEventListener("dragstart", handleDragstart)
      item.addEventListener("dragover", handleDragover)
      item.addEventListener("dragenter", handleDragenter)
      item.addEventListener("dragleave", handleDragleave, false)
      item.addEventListener("drop", handleDragdrop)
      item.addEventListener("dragend", handleDragend)
    })


    // Drag and drop for blocks
    let taskBlock = document.querySelectorAll('.block')
    
    taskBlock.forEach(item => {
      
      item.addEventListener("dragstart", handleBlockDragstart)
      item.addEventListener("dragover", handleBlockDragover)
      item.addEventListener("dragenter", handleBlockDragenter)
      item.addEventListener("dragleave", handleBlockDragleave)
      item.addEventListener("drop", handleBlockDragdrop)
      item.addEventListener("dragend", handleBlockDragend)

    })


    // Remove task item
    taskItems = document.querySelectorAll('.actionRemoveTask')
    taskItems.forEach(item => {
      item.addEventListener('click', handleRemoveTask.bind(this))
    })


  }

}

// On Block name edit
function handleUserDblCLick(e){
  if (e.target.classList.contains('panel-heading') || e.target.classList.contains('panel-block')){
    e.target.innerHTML = getEditView(e.target.textContent.trim())
  }
}


// Save function
function handleItemSave(e){
  const storage = getStorage()

  const el = e.target.parentElement.parentElement
  if (el.classList.contains('panel-heading')){
    
    if (e.target.parentElement.previousElementSibling){

      const currentBlockId = el.closest('.block').id
      const currentBlockName = e.target.parentElement.previousElementSibling.value.trim()
      
      if (currentBlockName.length > 0){
        let storageNew = storage.find(blocks => blocks.blockId == currentBlockId)
        storageNew.boardName = currentBlockName

        let updatedStorage = storage.map((item) => {
          if (item.blockId == currentBlockId) item = storageNew
          return item
        })
        setStorage(updatedStorage)
        location.reload()
      }

    }
  } else if (el.classList.contains('panel-block')){

    if (e.target.parentElement.previousElementSibling){
      const taskName = e.target.parentElement.previousElementSibling.value
      const taskId = el.id
      const currentBlockId = e.target.closest('.block').id
      const store = storage.find(blocks => blocks.blockId == currentBlockId)

      const taskIndex = store.tasks.findIndex(item => item.id == taskId)
      store.tasks[taskIndex].name = taskName

      let updatedStore = storage.map(item => {
        if (item.blockId == currentBlockId) item = store
        return item
      })
    
      setStorage(updatedStore)
      location.reload()
    }

  }
}


function globalKey(e){
 
  if (e.code == 'Enter' && e.target.classList.contains('addNewTask')){
     let task = e.target.value
     let storage = getStorage()
     
      // Get local storage and make it's clone
      // Add task item in new storage
      // Set new storage
      let currentBlockId = e.target.closest('.block').id
      let storageNew = storage.find(blocks => blocks.blockId == currentBlockId)
      const n = storageNew.tasks.length + 1
      storageNew.tasks.push({ id: n, name: task, order: n, deleted: false })
      
      let newArr = storage.map((item) => {
        if (item.blockId == currentBlockId) item = storageNew
        return item
      })

      setStorage(newArr)
      location.reload()
      
  }

}

function handleNewBlock(){
  
  let countBlocks = getStorage().length + 1
  let storage = getStorage()
  storage.push({ blockId: countBlocks, order: parseInt(countBlocks), boardName: `Board ${countBlocks}`, tasks: [] })
  setStorage(storage)

  this.$el.insertAdjacentHTML('afterend', `
      <div class="block" id="${countBlocks}">
        <nav class="panel">
          <p class="panel-heading">Board ${countBlocks}
            <span class="icon has-text-info actionRemoveBlock">
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

function handleRemoveBlock(e){
  const storage = getStorage()
  let currentBlockId = e.target.closest('.block').id
  let currentBlockStoreIndex = storage.findIndex(blocks => blocks.blockId == currentBlockId)
  storage.splice(currentBlockStoreIndex, 1) 

  e.target.closest('.block').remove()
  setStorage(storage)
}


// Drag and drope the task
let dragEl = null
function handleDragstart(e){
  dragEl = this

  if (e.target.classList.contains('panel-block')){
    e.dataTransfer.effectAllowed = 'move'
    
    this.style.opacity = '0.4'
    e.dataTransfer.setData('text/plain', this.innerHTML)
    e.dataTransfer.setData('html', e.target.closest('.block').id)
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
    const dragToBlockID = e.dataTransfer.getData('html')
    
    // Change order of task
    let currentBlock = this.closest('.block').querySelectorAll('nav a.panel-block')
    const currentBlockId = parseInt(this.closest('.block').id)
    // Handling from block

    currentBlock.forEach((item, index) => {
      const taskName = item.textContent.trim()
      const taskId = item.id
      newTasks.push({ id: taskId, name: taskName, order: index + 1, deleted: false })
 
      // Change style
      item.classList.remove('over')
    })

    newArr = storage.map(item => {
      if (item.blockId == currentBlockId) {
        item.tasks = newTasks
      }
        return item
    })
    setStorage(newArr)

    newArr = []
    newTasks = []
    // Handling TO block
    let dragToBlock = document.querySelectorAll(`[id="${dragToBlockID}"] nav a.panel-block`)
    dragToBlock.forEach((item, index) => {
      const taskName = item.textContent.trim()
      const taskId = item.id
   
      newTasks.push({ id: taskId, name: taskName, order: index + 1, deleted: false })
      // Change style
      item.classList.remove('over')
    })

    newArr = storage.map(item => {
      if (item.blockId == dragToBlockID) {
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


// Drag and Drop the block
let blockEl = null

function handleBlockDragstart(e){
  blockEl = this


  if (e.target.classList.contains('block')){
    e.dataTransfer.effectAllowed = 'move'
    this.style.opacity = '0.4'
    e.dataTransfer.setData('text/plain', this.innerHTML)
    e.dataTransfer.setData('html', e.target.getAttribute('order'))
    
  }
}

function handleBlockDragover(e){
  e.preventDefault()
}

function handleBlockDragenter(e){
  this.classList.add('over')
}

function handleBlockDragleave(e){
  this.classList.remove('over')
}

function handleBlockDragdrop(e){
  e.stopPropagation()
  let storage = getStorage()
    // Change order of block
    const dragToBlockOrder = parseInt(e.target.closest('.block').getAttribute('order'))
    const dragFromBlockOrder = parseInt(e.dataTransfer.getData('html'))

    blockEl.style.opacity = '1'
    blockEl.innerHTML = this.innerHTML
    this.innerHTML = e.dataTransfer.getData('text')
    
    let indexTo = storage.findIndex(block => block.order == dragToBlockOrder)
    let indexFrom = storage.findIndex(block => block.order == dragFromBlockOrder)
      
    storage[indexTo].order = dragFromBlockOrder
    storage[indexFrom].order = dragToBlockOrder
 
    setStorage(storage)
    this.classList.remove('over')
        
  return false
}


function handleBlockDragend(e){ }







// Remove

function handleRemoveTask(e){
  const storage = getStorage()
  const taskId = e.target.closest('.panel-block').id
  // Get local storage and make it's clone
  // Add task item in new storage
  // Set new storage

    let currentBlockId = e.target.closest('.block').id
    let store = storage.find(blocks => blocks.blockId == currentBlockId)
    let removeTaskIndex = store.tasks.findIndex(item => item.id === taskId)
    store.tasks.splice(removeTaskIndex, 1)
 
    let newArr = storage.map(item => {
      if (item.blockId == currentBlockId) item = store
      return item          
    })

    e.target.closest('.panel-block').remove()

    setStorage(newArr)
    // location.reload()

}

export default Main