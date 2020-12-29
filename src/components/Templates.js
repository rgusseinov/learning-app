export function getEditView(blockName){
  return `
    <input class="input" type="text" value="${blockName}">
    <span class="icon has-text-info actionRemoveBlock"><i class="fas fa-save"></i></span>  
  `
}