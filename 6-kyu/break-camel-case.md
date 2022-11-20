# [Break camelCase](https://www.codewars.com/kata/5208f99aee097e6552000148) · 6 kyu

```javascript
const isCapitalLetter = character => character !== character.toLowerCase()

const solution = string => {
  let result = ''

  for (let i = 0; i < string.length; i++) {
    const currentCharacter = string[i]

    result += isCapitalLetter(currentCharacter)
      ? ' ' + currentCharacter
      : currentCharacter
  }

  return result
}
```
