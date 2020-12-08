export function renderCurrency(name, rate){
  return `<a href="#!" class="collection-item"><span class="badge">${name}</span>${rate}</a>`
}


export function loginPage(){
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
}
