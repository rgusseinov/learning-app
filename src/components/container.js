import { Abstract } from "./abstract"

const getContainerTemplate = () => {
  return `<div class="container"></div>`
}

export class Container extends Abstract {

 
  getTemplate(){
    return getContainerTemplate()
  }

}