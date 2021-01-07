import Header from './components/Header';
import Blocks from './components/Blocks'
import Main from './components/Main'
// import './style.css';


const main = new Main('#app', {
  components: [Blocks]}
)

main.render()
