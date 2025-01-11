const ieroglifs = `アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン`

export default function getIeroglifsArray():Array<string> {
    const arr = []
    for (const i of ieroglifs) {
        arr.push(i)
    }
    return arr
}