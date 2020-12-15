class myPlanner {
  constructor(selector){
    this.$el = document.querySelector(selector)
  }

  render(){
    /*
      - Add new task
      - Remove task
      - edit task
      - move task
    */
    /*
    [
      {
        task: "Bying subscription on udemy", id: 1, order: 1
      },
      {
        task: "Bying", id: 0, order: 0
      }
    ]
    */
    let data = [
      { task: "Bying subscription on udemy", cost:"12.25", id: 1, order: 1 },
      { task: "Task 2", cost:"147.13", id: 2, order: 2 },
      { task: "Task 3", cost:"65.16", id: 3, order: 3 },
      { task: "Task 4", cost:"71.23", id: 4, order: 4 }
    ]

    const taskItems = data.map(item => {
      return `
        <div class="box" draggable="true">
          <span> ${item.cost} </span>
          <span>  <input class="file-path validate fill" value="${item.task}" type="text"> </span>
          <span>  <i class="material-icons">cancel</i> </span>
        </div>`
    })
    this.$el.innerHTML = ''
    this.$el.insertAdjacentHTML('beforeend', `
    
        <form action="#">
        <div class="file-field input-field">        
        <a class="waves-effect waves-light btn">Add task</a>     
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text">
          </div>          
        </div>
      </form>       
  
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
      //console.log(`start`, this)
      globThis = this
      e.dataTransfer.setData('text/plain', this.innerHTML)
    }
    
    function handleDragOver(e){
      e.preventDefault()
    }
    
    function handleDrop(e){
        e.stopPropagation()
        let el = e.dataTransfer.getData('text')
        //console.dir(el)
        if (globThis != this){
            globThis.innerHTML = this.innerHTML
            this.innerHTML = e.dataTransfer.getData('text')
        }
    
    
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

  }

}

export default myPlanner