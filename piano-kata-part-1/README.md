# [Piano Kata, Part 1 - 6 kyu](https://www.codewars.com/kata/589273272fab865136000108)

```javascript
const NUMBER_PIANO_KEYS = 88

const W = 'white'
const B = 'black'

const PIANO_KEYS = [W, B, W, W, B, W, B, W, W, B, W, B]

const createPiano = numberOfKeys => {
  const result = []
  for (let i = 0; i < numberOfKeys; i++) {
    result.push(PIANO_KEYS[i % PIANO_KEYS.length])
  }
  return result
}

const blackOrWhiteKey = keyPressCount => {
  const piano = createPiano(NUMBER_PIANO_KEYS)
  const keyIndex = keyPressCount - 1

  return piano[keyIndex % NUMBER_PIANO_KEYS]
}
```
