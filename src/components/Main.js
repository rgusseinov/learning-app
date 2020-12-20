class Main {
  constructor(selector, options){
    this.$el = document.querySelector(selector)
    this.components = options.components || []
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
  }
}

export default Main