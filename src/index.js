import myPlanner from './components/myplanner'
import ExchangeRate from './components/ExchangeRate'
import Login from './components/login';
import Main from './components/main';

const site = new Main('#app')
site.render()



window.addEventListener('hashchange', function(){
  const changedURL = location.hash.substring(1)
  // console.log(`changedURL`, changedURL)

  if (changedURL == 'login'){
    const site = new Login('#app')
    site.render()

  } else if (changedURL == 'planner'){
    const site = new myPlanner('#app')
    site.render()

  } else if (changedURL == 'exchange'){    
    const site = new ExchangeRate('#app')
    site.render()

  }
});