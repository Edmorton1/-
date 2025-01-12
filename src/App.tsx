import { useState } from "react"
import getRomanji from "./Files/getRomanji"
import { arr } from "./Files/getRomanji"

function App() {
  const [minKanji, setMinKanjii] = useState(2)
  const [maxKanji, setMaxKanji] = useState(5)

  const word = getRomanji(minKanji, maxKanji)
  const nickname = `${word[0]}${word[1]}`

  const [nick, setNick] = useState(nickname)
  
  function handleInput(e:any, func: Function) {
   if (e > 46) {
    func(46)
   } else if (e < 1) {
    func(1)
   } else {
    func(e)
   }
  }
  //
  function randomazeGif() {
    setTimeout(() => {
      document.body.style.backgroundImage = `url(${arr[0]})`
    })
    setTimeout(() => {
      document.body.style.backgroundImage = `url(${arr[1]})`
    }, 5000)
    setTimeout(() => {
      document.body.style.backgroundImage = `url(${arr[2]})`
    }, 10000)
  }
  randomazeGif()
  setInterval(() => {
    randomazeGif()
  }, 15000)
  
  //
  return (
    <>
      <div className="content">
        <div className="title">♡ Генератор ников для анимешников ♡</div>
        <div className="nick">{nick}</div>
          <form>
            кол-во иероглифов:
            от <input type="number" style={{marginRight: "5px"}} min={1} onChange={(e) => {handleInput(Number(e.target.value), setMinKanjii)}} max={46} value={minKanji} />
            до <input type="number" min={1} onChange={(e) => {handleInput(Number(e.target.value), setMaxKanji)}} max={46} value={maxKanji}/>
          </form>
          
        <div className="gif"><img src="https://i.giphy.com/tXwHTbQuyjo1q.webp"/></div>
        <button onClick={() => (setNick(`${getRomanji(minKanji, maxKanji)[0]}${getRomanji(minKanji, maxKanji)[1]}`))}>СГЕНЕРИРОВАТЬ</button>
      </div>
      <footer>Сделал <a href="https://github.com/Edmorton1" target="_blank">Edmorton</a></footer>
    </>
  )
}

export default App
