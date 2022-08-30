# [Where my anagrams at? - 5 kyu](https://www.codewars.com/kata/523a86aa4230ebb5420001e1)

```javascript
const getWordSortedAlphabetically = string => {
  return string.split('').sort().join('')
}

const anagrams = (word, words) => {
  const wordSortedAlphabetically = getWordSortedAlphabetically(word)

  return words.filter(word => {
    return wordSortedAlphabetically === getWordSortedAlphabetically(word)
  })
}
```
