# [Convert string to camel case - 6 kyu](https://www.codewars.com/kata/517abf86da9663f1d2000003)

```javascript
const getSplitSentence = (sentence, divider) => sentence.split(divider)

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const toCamelCase = string => {
  const splitSentence = string.includes('-')
    ? getSplitSentence(string, '-')
    : getSplitSentence(string, '_')

  return splitSentence
    .map((word, index) => {
      if (index === 0) return word
      return capitalizeFirstLetter(word)
    })
    .join('')
}
```
