export function getStorage(){
  return JSON.parse(localStorage.getItem('blocks')) || []
}

export function setStorage(data){
  localStorage.setItem('blocks', JSON.stringify(data))
}