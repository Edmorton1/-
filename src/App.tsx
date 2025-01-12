import { useState } from "react"
import getRomanji from "./Files/getRomanji"
import { arr } from "./Files/getRomanji"
import Music from "./Files/music"

function App() {
  const [minKanji, setMinKanjii] = useState(2)
  const [maxKanji, setMaxKanji] = useState(5)

  const word = getRomanji(minKanji, maxKanji)
  const nickname = `${word[0]}${word[1]}`

  const [nick, setNick] = useState(nickname)
  
  function handleInput(e:number, func:React.Dispatch<React.SetStateAction<number>>) {
   if (e > 46) {
    func(46)
   } else if (e < 1) {
    func(1)
   } else {
    func(e)
   }
  }

  function randomazeGif() {
    setTimeout(() => {
      document.body.style.backgroundImage = `url(${arr[1]})`
    })
    setTimeout(() => {
      document.body.style.backgroundImage = `url(${arr[2]})`
    }, 3000)
    setTimeout(() => {
      document.body.style.backgroundImage = `url(${arr[0]})`
    }, 6000)
  }
  setInterval(() => {
    randomazeGif()
  }, 9000)

  return (
    <>
      <div className="content">
        <Music />
        <div className="title">♥ Генератор ников для анимешников ♥</div>
        <div className="nick">{nick}</div>
          <form>
            кол-во иероглифов:
            от <input type="number" style={{marginRight: "5px"}} min={1} onChange={(e) => {handleInput(Number(e.target.value), setMinKanjii)}} max={46} placeholder="2" />
            до <input type="number" min={1} onChange={(e) => {handleInput(Number(e.target.value), setMaxKanji)}} max={46} placeholder="5"/>
          </form>
        <div className="gif"><img src="https://i.giphy.com/tXwHTbQuyjo1q.webp"/></div>
        <button onClick={() => (setNick(`${getRomanji(minKanji, maxKanji)[0]}${getRomanji(minKanji, maxKanji)[1]}`))} className="button">СГЕНЕРИРОВАТЬ</button>
      </div>
      <footer>Автор <a href="https://github.com/Edmorton1" target="_blank">Edmorton</a></footer>
    </>
  )
}

export default App
// https://dl2.mp3party.net/online/10471296.mp3