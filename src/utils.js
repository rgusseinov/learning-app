export const createElement = (template) => {
  const newElement = document.createElement(`div`)
  newElement.innerHTML = template
  return newElement.firstChild
}

export const generateTasks = () => {
  const randomNumber = Math.floor(Math.round(Math.random() * 3))
  const id = Math.floor(Math.random() * 3)
  return {
    id,
    title: tasksTitle[randomNumber]
  }
}

const tasksTitle = ['Сделать CMS', 'Закрыть модули по HR', 'Поиск новой работы', 'Сделать кейс на бихенс']


export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
}

export const render = (container, component, place) => {
  
  switch(place){
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
}


/* export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(RenderPosition.AFTERBEGIN, element)
      break;
    case RenderPosition.BEFOREEND:
      container.append(RenderPosition.BEFOREEND, element)
      break;
  }
} */