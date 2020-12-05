export default function getExchangeRates(){ 
  const URL = 'http://localhost:3001/rates'
  return fetch(URL).then(response => response.json())
}
