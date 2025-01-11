import getIeroglifsArray from "./getIeroglifsArray";
import * as wanakana from 'wanakana'

export default function getRomanji() {
const ieroglifs:Array<string> = getIeroglifsArray()

function getRandomNumber(min: number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
const countIer = getRandomNumber(2, 3);
  
    
function getWord() {
    const kanjiArr = []
    for (let i = 0;  i < countIer; i++) {
        kanjiArr.push(ieroglifs[getRandomNumber(2, ieroglifs.length)])
    }
    const kanji = kanjiArr.join('')
    const romaji = wanakana.toRomaji(kanji)
    return [romaji, kanji]
}

return getWord()
}