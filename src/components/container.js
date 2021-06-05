
const getContainerTemplate = () => {
  return `<div class="container"></div>`
}

export class Container {

  getElement(){
    return getContainerTemplate()
  }

}