import {$} from '../core/dom'

export default class Main {

  constructor(selector, options){
    this.$el = $(selector)
    this.components = options.components || []
  }

  getRoot(){
    const $root = $.create('div', 'main-container')
    

     this.components = this.components.map(Component => {
      const $el = $.create('div', `class-${Math.round(Math.random(10) * 50)}`)
      // console.log(`el`, $el) 
      const component = new Component($el)
      $el.html(component.toHTML())
      
      $root.append($el)
      return component
    })

    return $root
  }

  render(){
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init());
  }

}