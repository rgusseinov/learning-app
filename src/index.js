// import Header from './components/Header';
import Blocks from './components/Blocks'
import Main from './components/Main'
import Table from './components/Table';
import './style.css';


const main = new Main('#app', {
    components: [Blocks, Table]
  }
)

main.render()
