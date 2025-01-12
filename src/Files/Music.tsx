import { useRef, useState } from "react";

export default function Music() {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [muzon, setMuzon] = useState(false)
    const [pause, setPause] = useState(false)
    const [volume, setVolume] = useState(0.2)
    const [standartVolume, setStandartVolume] = useState(false)

    function playMusic(command: string) {
        if (audioRef.current) {
            if (command === "play") {
              audioRef.current.play();
              if (!standartVolume) {
                setStandartVolume(true)
                audioRef.current.volume = 0.2
              }
              setMuzon(true);
              setPause(false)
            } else if (command === "pause") {
              audioRef.current.pause();
              setPause(true)
            }
          }
        
    }
    function changeVolime(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(typeof audioRef.current)
        const newVolume = Number(event.target.value)
        setVolume(newVolume)
        if (audioRef.current) {
            audioRef.current.volume = newVolume
        }
    }


    return (
    <div>
    {!muzon && <button className="button button-muzon" onClick={() => {playMusic("play")}}>Врубить музон</button>}
    <audio src="https://vgmsite.com/soundtracks/jojos-bizarre-adventure-golden-wind-o.s.t-vol.1-overture-2018/rdhyvullzd/01.%20Il%20Vento%20D%E2%80%99oro.mp3" ref={audioRef} />
        {muzon && <div className="control">
            {!pause && <button onClick={() => playMusic("pause")} className="button pauseButton">Пауза</button>}
            {pause && <button onClick={() => playMusic("play")} className="button pauseButton">Возобновить</button>}
            <input type="range" min={0} max={1} step={0.01} value={volume} onChange={changeVolime} className="inputRange"/>
        </div>}
    </div>
    )
}