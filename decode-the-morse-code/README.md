# [Decode the Morse code - 6 kyu](https://www.codewars.com/kata/54b724efac3d5402db00065e)

```javascript
const decodeMorse = morseCode => {
  return morseCode
    .split(' ')
    .map(character => (character === '' ? ' ' : MORSE_CODE[character]))
    .join('')
    .replace(/  +/g, ' ')
    .trim()
}
```
