# [Piano Kata, Part 2](https://www.codewars.com/kata/589631d24a7323d18d00016f) · 6 kyu

```javascript
const NUMBER_PIANO_KEYS = 88

const CHROMATIC_SCALE = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
]

const createPiano = numberOfKeys => {
  const result = []
  for (let i = 0; i < numberOfKeys; i++) {
    result.push(CHROMATIC_SCALE[i % CHROMATIC_SCALE.length])
  }
  return result
}

const whichNote = keyPressCount => {
  const piano = createPiano(NUMBER_PIANO_KEYS)
  const keyIndex = keyPressCount - 1

  return piano[keyIndex % NUMBER_PIANO_KEYS]
}
```
