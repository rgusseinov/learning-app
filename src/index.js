import Header from './components/Header';
import Blocks from './components/Blocks'
import Main from './components/Main'
import './style.css';


/*
  - Создание карточки + 
  - Удаление карточки
  - Добавление/удаление/редактирование задачи + 
  - Перемещение карточки +
  - Перемещение задач между карточками
  - Редактирование название блока
  - Просто перемещение одной задачи из одной карточки в другую
  - Удаление блока
  
  --- Эффекты
    

  Сущности
  
  - Карточки
  - Drag and Drop

  */

const main = new Main('#app', {
  components: [Blocks]}
)

main.render()
