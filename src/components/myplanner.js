class myPlanner {
  constructor(selector){
    this.$el = document.querySelector(selector)
  }

  render(){
    this.$el.innerHTML = ''
    this.$el.insertAdjacentHTML('beforeend', `<h1> My Planner </h1>`)
  }
  
}

export default myPlanner