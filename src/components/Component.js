import { DomListener } from '../core/DomListener'

export class Component extends DomListener {

    constructor($root, options = {}){
        super($root, options.listeners)
        this.name = options.name || ''
    }

	// Возращает шаблон компонента
    toHTML(){
        return ''
    }
 
    init(){
        this.initDomListeners()
    }

}