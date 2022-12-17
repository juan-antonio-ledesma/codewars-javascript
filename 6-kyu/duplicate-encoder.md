# [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c) · 6 kyu

```javascript
const isUniqueCharacter = (word, character) => {
  return word.indexOf(character) === word.lastIndexOf(character)
}

const duplicateEncode = word => {
  const lowerCaseWord = word.toLowerCase()

  return lowerCaseWord
    .split('')
    .map(character => {
      return isUniqueCharacter(lowerCaseWord, character) ? '(' : ')'
    })
    .join('')
}
```
