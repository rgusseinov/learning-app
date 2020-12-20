import Header from './components/Header';
import Blocks from './components/Blocks'
import Main from './components/Main'
import './style.css';


/*
  - Создание карточки
  - Удаление карточки
  - Добавление/удаление/редактирование задачи
  - Перемещение карточки
  - Перемещение задач между карточками

  ---

  Сущности
  
  - Карточки
  - Drag and Drop

  */

const main = new Main('#app', {
  components: [Header, Blocks]}
)

main.render()
