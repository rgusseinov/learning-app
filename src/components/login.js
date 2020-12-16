import { loginPage } from "./templates"
import { getUser} from "./utils"

class Login {
  constructor(selector){
    this.$el = document.querySelector(selector)
  }

  render(){

    this.$el.innerHTML = ''
    this.$el.insertAdjacentHTML('beforeend', loginPage())
    this.iniListeners()

  }


  iniListeners(){

    // Log in
    if (!getUser()){
      document.querySelector('#loginForm').addEventListener('submit', function(e){
        e.preventDefault()
        let firstName = this.querySelector('[name="first_name"]').value
        let lastName = this.querySelector('[name="last_name"]').value

        let formData = {
          firstName, 
          lastName,
          isLogged: true
        }
        const dt = JSON.stringify(formData)
        localStorage.setItem('user', dt)
      })
    } else {
      // Log out
      document.querySelector('.actionLogout').addEventListener('click', function(e){
        e.preventDefault()
        location.reload('')
        localStorage.setItem('user', '')
      })

    }
     

  }


  
}

export default Login