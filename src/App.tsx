import getRomanji from "./getRomanji"

function App() {
  const romanji = getRomanji()[0]
  const kanji = getRomanji()[1]
  return (
    <>
      {`${romanji}${kanji}`}
    </>
  )
}

export default App
