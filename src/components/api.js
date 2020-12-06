async function getExchangeRates(){ 
  const URL = 'http://localhost:3001/rates'
  const response = await fetch(URL)
  return await response.json()
}

export default getExchangeRates
