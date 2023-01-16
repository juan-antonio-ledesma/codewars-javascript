# [First non-repeating character](https://www.codewars.com/kata/52bc74d4ac05d0945d00054e) · 5 kyu

```javascript
const isUniqueCharacter = (string, character) => {
  return string.indexOf(character) === string.lastIndexOf(character)
}

const firstNonRepeatingLetter = string => {
  const lowerCaseString = string.toLowerCase()

  for (let i = 0; i < lowerCaseString.length; i++) {
    if (isUniqueCharacter(lowerCaseString, lowerCaseString[i])) return string[i]
  }

  return ''
}
```
