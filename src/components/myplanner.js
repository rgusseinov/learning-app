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
      { task: "Bying", cost:"147.13", id: 2, order: 2 }
    ]

    const taskItems = data.map(item => {
      return `<tr data-id=${item.id}>
      <td> ${item.cost} </td>
        <td>  <input class="file-path validate" value="${item.task}" type="text"> </td>
        <td>  <i class="material-icons">cancel</i> </td>
      </tr>`
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
  
      <table>
        <tbody>
          ${taskItems}
        </tbody>
      </table>
          


    `)
  }
  
}

export default myPlanner