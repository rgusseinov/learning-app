import { getStorage, setStorage } from "./utils"

class myPlanner {
  constructor(selector){
    this.$el = document.querySelector(selector)
  }

  render(){
    let data = getStorage()
    const taskItems = data.map(item => {
      return `
        <div class="box" draggable="true" data-id="${item.id}">
          <span> ${item.cost} </span>
          <span>  <input class="file-path validate fill" value="${item.task}" type="text"> </span>
          <span>  <i class="material-icons removeTask">cancel</i> </span>
        </div>`
    })
    this.$el.innerHTML = ''
    this.$el.insertAdjacentHTML('beforeend', `
    
      <div class="row">
        <form class="col s12">
          <div class="row">
          <div class="input-field col s2">
            <a class="waves-effect waves-light btn" id="addNewsTask">Add task</a>
          </div> 
            <div class="input-field col s8">
              <input placeholder="Task name" type="text" class="taskName">
            </div>
            <div class="input-field col s2">
              <input placeholder="Price" type="text" class="priceName">
            </div>
          </div>
        </form>
      </div>


      <div class="container">
        ${taskItems.join('')}
      </div>


    `)

    this.initListeners()
  }
  
  initListeners(){

    let items = document.querySelectorAll('.box')
    let globThis = null
    
    function handleDragStart(e){
      globThis = this
      e.dataTransfer.setData('text/plain', this.innerHTML)
    }
    
    function handleDragOver(e){
      e.preventDefault()
    }
    
    function handleDrop(e){
        e.stopPropagation()
        const arr = []
        if (globThis != this){
            globThis.innerHTML = this.innerHTML
            this.innerHTML = e.dataTransfer.getData('text')
        }

        let boxes = document.querySelectorAll('.container .box')
        boxes.forEach((box, index) => {
          const price = box.querySelectorAll('span')
          const priceText = price[0].textContent
          const taskName = price[1].querySelector('input').value
          
          arr.push({
            id: index + 1, task: taskName, cost: priceText, order: index + 1
          })
         
        })
        setStorage('tasks', arr)
        location.reload()
        
      return false
    }
    
    function handleDragEnd(e){

    }
    
    items.forEach(item => {
      item.addEventListener('dragstart', handleDragStart, false)
      item.addEventListener('dragover', handleDragOver, false)
      item.addEventListener('drop', handleDrop, false)
      item.addEventListener('dragend', handleDragEnd, false)
    }) 

    // Adding new task
    document.querySelector('#addNewsTask').addEventListener('click', function(e){
      e.preventDefault()
      let taskName = document.querySelector('.taskName').value
      let priceName = document.querySelector('.priceName').value
      
      let taskList = getStorage()
      taskList.push({
        id: taskList.length + 1, task: taskName, cost: priceName, order: taskList.length + 1
      })

      setStorage('tasks', taskList)
      location.reload()
    })

   
    // Removing task
    
    document.querySelector('.container').addEventListener('click', function(e){
      e.preventDefault()      
      if (e.target.classList.contains('removeTask')){
        let taskId = parseInt(e.target.parentElement.parentElement.dataset.id)
        let taskList = getStorage()
        let newTaskList = taskList.filter(item => item.id !== taskId)

        setStorage('tasks', newTaskList)
        // location.reload()
      }
      
  
    })

  }

}

export default myPlanner