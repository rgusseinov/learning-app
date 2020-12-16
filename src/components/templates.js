import { getUser } from "./utils"

export function renderCurrency(name, rate){
  return `<a href="#!" class="collection-item"><span class="badge">${name}</span>${rate}</a>`
}


export function loginPage(){

  let firstName = null, lastName = null
  let user = JSON.parse(localStorage.getItem('user')) || []   
  if (user.firstName) firstName = user.firstName
  if (user.lastName) lastName = user.lastName

  if (!user.isLogged){
  return `
    <div class="row">
      <form class="col s12" id="loginForm">
        <div class="row">
            <div class="input-field col s6">
              <input placeholder="Placeholder" id="first_name" name="first_name" type="text" class="validate">
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" name="last_name" class="validate">
              <label for="last_name">Last Name</label>
            </div>
          </div> 

          <div class="row">
            <div class="input-field col s6">
              <button class="btn waves-effect waves-light" type="submit" name="action"> Submit </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  `
  } else {
    return `
    <h2> Welcome to personal cabinet </h2>
    <table>
    <thead>
      <tr>
          <th>Name</th>
          <th>Last Name </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
      </tr>
      
    </tbody>
  </table>
        
  <a class="waves-effect waves-light btn-small actionLogout">Log out</a>
    `
  }
}
