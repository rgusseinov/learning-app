import { createElement } from "../utils"

export class Abstract {

  constructor(){
    if (new.target === Abstract){
      throw new Error(`Can't instantiate Abstract Component, only concrete one.`)
    }
    this._element = null
    this._callback = {};
  }

  getElement(){
    if (!this._element){
      this._element = createElement(this.getTemplate())
    }
    return this._element
  }

  removeElement(){
    this._element = null
  }

}