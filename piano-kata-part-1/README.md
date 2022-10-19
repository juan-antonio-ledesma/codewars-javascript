# [Piano Kata, Part 1 - 6 kyu](https://www.codewars.com/kata/589273272fab865136000108)

```javascript
const piano = [
  1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0,
  1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1,
  0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1,
  0, 1, 1, 0, 1, 0, 1, 0, 1, 1,
]

const blackOrWhiteKey = keyPressCount => {
  const keyIndex = keyPressCount - 1

  return piano[keyIndex % piano.length] === 1 ? 'white' : 'black'
}
```
