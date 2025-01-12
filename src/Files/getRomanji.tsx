import getIeroglifsArray from "./getIeroglifsArray";
import * as wanakana from 'wanakana'

export const arr = [
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDRwbXMxZm52eWR5NGkzamJxOWYxeHpxZWhqaHA2bDZzdXFoeWN3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f9jxYYRVPHtKsCf9sy/giphy.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzVlamN6OGlvYXNvODFsa2g4emtwdW5lYXAwbnU2a2wyZXh2cWJyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nhwtzGQ9w9mkU/giphy.webp",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejFqcnEwanZydzQ4YnJpYWdoeWpzeHd4Zm12Znhjd3phdmMxOTdnaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h9rBcBywX895S/giphy.webp"
]

function getRandomNumber(min: number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function getRomanji(minKanji: number, maxKanji: number) {
const ieroglifs:Array<string> = getIeroglifsArray()
  
const countIer = getRandomNumber(minKanji, maxKanji);
  
    
function getWord() {
    const kanjiArr = []
    for (let i = 0;  i < countIer; i++) {
        kanjiArr.push(ieroglifs[getRandomNumber(-1, ieroglifs.length)])
    }
    const kanji = kanjiArr.join('')
    const romaji = wanakana.toRomaji(kanji)
    return [romaji, kanji]
}

return getWord()
}