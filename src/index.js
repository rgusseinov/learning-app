import myPlanner from './components/myplanner'
import ExchangeRate from './components/ExchangeRate'


window.addEventListener('hashchange', function(){
  
  const changedURL = location.hash.substring(1)
  // document.querySelector('#app').innerHTML = content
  // console.log(changedURL)
  if (changedURL == 'planner'){

    const site = new myPlanner('#app')
    site.render()

  } else if (changedURL == 'exchange'){

    
    const site = new ExchangeRate('#app')
    site.render()

  }

});