export function getEditView(name){
  return `
    <input class="input quickSave" type="text" value="${name}">
    <span class="icon has-text-info actionSaveItem"><i class="fas fa-save"></i></span>  
  `
}