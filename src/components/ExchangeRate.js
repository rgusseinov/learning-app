import getExchangeRates from './api'


class ExchangeRate {
  constructor(selector){
    this.$el = document.querySelector(selector)
  }

  render(){
    const getRates = getExchangeRates()
    let html = `
    <div class="container">
    <div class="row">
      <div class="col s3">
        <h3> Курс валют </h3>
      </div> 
    </div>  
      <div class="col s3">
        <div class="collection" id="collectionId"></div>
      </div>
    </div>
    </div>`
/*     getRates.then(data => {      
      data.forEach(item => {        
        html += `<a href="#!" class="collection-item"><span class="badge">${item.rate}</span>${item.name}</a>`
      })    
      this.$el.insertAdjacentHTML('afterbegin', html)
    })     */
    this.$el.innerHTML = ''
    this.$el.insertAdjacentHTML('afterbegin', html)

  }
}

export default ExchangeRate