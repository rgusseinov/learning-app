export function getStorage(){
  return JSON.parse(localStorage.getItem('tasks')) || []
}

export function setStorage(name, options) {
  localStorage.setItem(name, JSON.stringify(options))
}