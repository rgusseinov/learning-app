class Login {
  constructor(selector){
    this.$el = document.querySelector(selector)
  }

  render(){
    this.$el.innerHTML = ''
    this.$el.insertAdjacentHTML('beforeend', `<h1> Welcome to Login page </h1>`)
  }
  
}

export default Login