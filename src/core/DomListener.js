import {capitalize} from './utils'

export class DomListener {

  constructor($root, listeners = []){
    if (!$root){
      throw new Error(`No $root provided for DomListener`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners(){
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      // console.log(`Module: ${this.name}, method ${method}`)
      // console.log(`this`, this.$root)
      // console.log(`listener`, listener)

      if (!this[method]){
        throw new Error(`Method ${method} is not implement in ${this.name}`)
      }

      this.$root.on(listener, this[method].bind(this))
    })
  }
}

function getMethodName(eventName){
  return 'on' + capitalize(eventName)
}