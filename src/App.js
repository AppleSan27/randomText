import './App.css';
import React, { useState } from 'react';
import {Button} from 'antd'



function App() {
const [text, setText] = useState([])
const Book = `Про общество анонимных малолетних преступников.Мемуары.
Вещественные доказательства о вещем Олеге.
Брошюра о вреде кормления уток хлебом.
Легенды и сказания из полицейского участка им.Святой Дубинки.
Сборник анекдотов про рост дварфов.
МЫ НЕ ОДНОЙ ШЕРСТИ: 10 отличий между оборотнями и фурри.
Очень научная книга про украшения кораблей.
Что из нас добывают? Шокирующее разоблачение торговцев запрещенными веществами.`
const BookArr = Book.split('\n')
const Cvest = `Поиск пропавшей жены (от отчаявшегося фейя) 
Запрос на добычу крови единорога (от профессора Квира)
Повыть на луну в 3 ночи около полицейского участка (от фурри)
Выкрасть у фурри-рептилии яйцо (от оборотней)
Спасти принцессу (от Марио)
Помочь избавиться от усатого сантехника (от «принцессы»)
Уничтожить все копии DVD с фильмом “Сумерки” (от вампиров)
Продать вещи, приобретенные ЗАКОННЫМ путем, совершенно точно ЛЕГАЛЬНО (от Олега)
Найти и вернуть русалку (от пиратов)
Убить мужа-мудака (от лесной нимфы)
Покрасить дракону яйца на пасху (от дракона)
Изрисовать полицейский участок (от общества малолетних преступников)
Трахнуть его мамку (от общества малолетних преступников)
Найти пропавшего ди-джея (от рейверов)
Есть заказик, обратитесь в участок (от отца Мефедрония)`
const CvestArr = Cvest.split('\n')

function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}


const hendleClickBoock= () => {
  setText([arrayRandElement(BookArr)])

}
const hendleClick = () => {
  let arr=[]
  while (arr.length<5) {
    let n = arrayRandElement(CvestArr)
    if(!arr.includes(n)) arr.push(n)
  }
  setText(arr)
}


  return (
    <div className="App">
      <div>
      <Button onClick={hendleClickBoock}>ауф Книжка</Button>
      <Button onClick={hendleClick}>ауф Квест</Button>
      </div>
      <div className='text'>
        {text.map(item => <div>{item}</div>)}
      </div>
    </div>
  );
}

export default App;
