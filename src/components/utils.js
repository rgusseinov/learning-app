export function getUser(){
  let isLogged = false
  if (localStorage.getItem('user')){
    let user = JSON.parse(localStorage.getItem('user'))
    if (user.isLogged) isLogged = true; else user.isLogged = false
  }
  return isLogged
}