class myPlanner {
  constructor(selector){
    this.$el = document.querySelector(selector)
  }

  render(){
    // console.log(`My Planner`)
    this.$el.innerHTML = ''
    this.$el.insertAdjacentHTML('beforeend', `<h1> My Planner </h1>`)
  
  }
}

export default myPlanner