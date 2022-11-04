# [Find the missing letter](https://www.codewars.com/kata/5839edaa6754d6fec10000a2) · 6 kyu

```javascript
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const isUpperCaseLetter = letter => letter.toUpperCase() === letter

const findMissingLetter = array => {
  const lowerCaseLetters = array.join('').toLowerCase()
  const firstLetter = lowerCaseLetters[0]
  const positionFirstLetterInAlphabet = ALPHABET.indexOf(firstLetter)
  const completeLetterSequence = ALPHABET.slice(
    positionFirstLetterInAlphabet,
    positionFirstLetterInAlphabet + array.length,
  )

  for (let i = 0; i < completeLetterSequence.length; i++) {
    if (completeLetterSequence[i] !== lowerCaseLetters[i]) {
      return isUpperCaseLetter(array[0])
        ? completeLetterSequence[i].toUpperCase()
        : completeLetterSequence[i]
    }
    continue
  }
}
```
