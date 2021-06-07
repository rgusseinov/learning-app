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

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.insertAdjacentHTML(RenderPosition.AFTERBEGIN, element)
      break;
    case RenderPosition.BEFOREEND:
      container.insertAdjacentHTML(RenderPosition.BEFOREEND, element)
      break;
  }
}