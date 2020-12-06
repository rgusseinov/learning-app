import getExchangeRates from './api'
import renderCurrency from './templates'

class ExchangeRate {
  constructor(selector){
    this.$el = document.querySelector(selector)
  }

  async render(){
    const getData = await getExchangeRates()
    const arr = getData.map(item => renderCurrency(item.name, item.rate))

    let html = `
    <div class="container">
    <div class="row">
      <div class="col s3">
        <h3> Курс валют </h3>
      </div>
    </div>
      <div class="col s3">
        <div class="collection" id="collectionId">${arr.join('')} </div>
      </div>
    </div>
    </div>`
  
    this.$el.innerHTML = ''
    this.$el.insertAdjacentHTML('afterbegin', html)
    
  }
}

export default ExchangeRate