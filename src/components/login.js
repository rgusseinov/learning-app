import { loginPage } from "./templates"

class Login {
  constructor(selector){
    this.$el = document.querySelector(selector)
  }

  render(){
    let html = loginPage()
    console.log(`Login`)
    this.$el.innerHTML = ''
    this.$el.insertAdjacentHTML('beforeend', html)
    this.iniListeners()

  }

  iniListeners(){
    document.querySelector('#loginForm').addEventListener('submit', function(e){
      e.preventDefault()
      let firstName = this.querySelector('[name="first_name"]').value
      let lastName = this.querySelector('[name="last_name"]').value

      let formData = {
        firstName, 
        lastName
      }
      console.log(`formData`, formData)
    })
  }


  
}

export default Login