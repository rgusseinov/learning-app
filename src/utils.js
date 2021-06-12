export const createElement = (template) => {
  const newElement = document.createElement(`div`)
  newElement.innerHTML = template
  return newElement.firstChild
}

export const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask)
}

const generateTask = () => {
  const randomNumber = Math.floor(Math.round(Math.random() * 3))
  const id = Math.floor(Math.random() * 3)
  return {
    id,
    isProgress: Math.random() > 0.5,
    isCompleted: Math.random() > 0.5,
    isArchive: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    title: tasksTitle[randomNumber]
  }
}

const tasksTitle = ['Сделать CMS', 'Закрыть модули по HR', 'Поиск новой работы', 'Сделать кейс на бихенс']


export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
}

export const FilterType = {
  ALL: `all`,
  PROGRESS: `progress`,
  COMPLETED: `completed`,
  FAVORITES: `favorites`,
  ARCHIVE: `archive`,
};



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

export const replace = (newComponent, oldComponent) => {
  const parentElement = oldComponent.getElement().parentElement
  const newElement = newComponent.getElement()
  const oldElement = oldComponent.getElement()

  const isExistElements = !!(parentElement && oldElement && newElement)

  if (isExistElements && parentElement.contains(oldElement)){
      parentElement.replaceChild(newElement, oldElement)
  }
}

const FILTER_FUNCTIONS = {
  [FilterType.ALL]: (tasks) => tasks.filter(() => true),
  [FilterType.PROGRESS]: (tasks) => tasks.filter((task) => task.isProgress),
  [FilterType.COMPLETED]: (tasks) => tasks.filter((task) => task.isCompleted),
  [FilterType.FAVORITES]: (tasks) => tasks.filter((task) => task.isFavorite),
  [FilterType.ARCHIVE]: (tasks) => tasks.filter((task) => task.isArchive),
};

  
export const getTasksByFilter = (tasks, filterType) => {
  const filteredTasks = FILTER_FUNCTIONS[filterType](tasks)
  return filteredTasks
};

export const parsePrefixId = (prefix, id) => id.slice(prefix.length);

export const remove = (component) => {
  component.getElement().remove()
  component.removeElement()
}