# [Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)

:martial_arts_uniform: **6 kyu** · `STRINGS` · `DATA STRUCTURES` · `FUNDAMENTALS`

```javascript
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const onlyLettersRegex = new RegExp(/[^a-z]+/, 'gi')

const getUniqueLetters = array => {
  return array.filter(
    (letter, position, self) => self.indexOf(letter) === position,
  )
}

const isPangram = string => {
  const arrayWithLowerCaseLetters = string
    .toLowerCase()
    .replace(onlyLettersRegex, '')
    .split('')

  return (
    getUniqueLetters(arrayWithLowerCaseLetters).sort().join('') === ALPHABET
  )
}
```
