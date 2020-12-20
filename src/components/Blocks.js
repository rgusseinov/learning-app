class Blocks {

  getBlocks(){
    return `
      <div class="block">
        <nav class="panel">
          <p class="panel-heading">Board 1
            <span class="icon has-text-info">
              <i class="fas fa-trash"></i>
            </span>
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Search">
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <a class="panel-block is-active">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span> Task 1 </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span> Task 2
          </a>
          <a class="panel-block">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span> Task 3
          </a>
        </nav>
    </div>
    `
  }


  addBlock(){
    return `
      <div class="block">
        <nav class="panel">
          <p class="panel-heading">New boards 1
            <span class="icon has-text-info">
              <i class="fas fa-trash"></i>
            </span>
          </p>
        </nav>
    </div>
    `
  }

  toHTML(){
    let html = ''
    // Если есть данные в localStorage то рисуем блоки и тасками
    let isLocalStorage = false
    if (isLocalStorage) html = this.getBlocks()

    return html
  }
}

export default Blocks