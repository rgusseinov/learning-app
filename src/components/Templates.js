export function getEditView(blockName){
  return `
    <input class="input quickSave" type="text" value="${blockName}">
    <span class="icon has-text-info actionSaveBlock"><i class="fas fa-save"></i></span>  
  `
}