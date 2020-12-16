export function getUser(){
  let isLogged = false
  if (localStorage.getItem('user')){
    let user = JSON.parse(localStorage.getItem('user'))
    if (user.isLogged) isLogged = true; else user.isLogged = false
  }
  return isLogged
}

export function getStorage(){
  return JSON.parse(localStorage.getItem('tasks')) || []
}

export function setStorage(name, options) {
  localStorage.setItem(name, JSON.stringify(options))
}