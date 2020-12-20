class Header {

  toHTML(){
    return `
    <nav class="navbar" role="navigation" aria-label="dropdown navigation">
      <a class="navbar-item">
        <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/96/trello-icon.png" alt="Trello"  >
      </a>
      <div class="navbar-item">
        <div class="field is-grouped">
            <p class="control">
              <a class="button addBlock">
                <span class="icon">
                  <i class="fas fa-plus" aria-hidden="true"></i>
                </span>
                <span>New block</span>
              </a>
            </p>
          </div>
      </div>
    </nav>`
  }
}


export default Header