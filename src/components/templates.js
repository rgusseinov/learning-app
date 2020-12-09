import { getUser } from "./utils"

export function renderCurrency(name, rate){
  return `<a href="#!" class="collection-item"><span class="badge">${name}</span>${rate}</a>`
}


export function loginPage(){

  const isLogged = getUser()
  if (!isLogged){
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
        <td>Ruslan</td>
        <td>Gusseinov</td>
      </tr>
      
    </tbody>
  </table>
        
  <a class="waves-effect waves-light btn-small actionLogout">Log out</a>
    `
  }
}
