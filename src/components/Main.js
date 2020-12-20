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
    this.eventListeners()
  }

  eventListeners(){
    // Adding new task Block
    document.querySelector('.addBlock').addEventListener('click', handleClick.bind(this))

    // Adding new task
    
  }

}

function handleClick() {
  
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

export default Main