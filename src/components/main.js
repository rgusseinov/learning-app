class Main {
  constructor(selector){
    this.$el = document.querySelector(selector)
  }

  render(){

    this.$el.innerHTML = ''
    this.$el.innerHTML = 
    `<div style="width:60px; height:60px; background-color:red;">dfsfsfsfsd</div>`;
  }
  
}

export default Main