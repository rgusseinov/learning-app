import { Component } from "./Component"

class Blocks extends Component {

  constructor($root){
    super($root, {
      name: 'Block',
      listeners: ['input', 'click']
    })

    console.log(`root`, $root)
  }
  

  onInput(e){
    console.log('Block Input', e.target.value)
  }

  onClick(e){
    
    if (e.target.id == 'load'){
      // console.log(`Block Clicked`, e.target.id)
      this.getPosts()

    }
  }

  getPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const posts = fetch(url)
    
    
    const data = posts.then(result => result.json())
    data.then(post => {
      post.forEach(element => {
        // console.log(element.title)
        this.$root.append(element.title)
      })
    })
    
  }

  toHTML(){
    return `
      <div class="block-container">
        <input type="text" class="block-input input" placeholder="Block name here">        
      </div>
      <button id="load" class="button"> Получить статьи </button>
    `
  }
}


export default Blocks