# [Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272) · 6 kyu

```javascript
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const getWordScore = word => {
  return word.split('').reduce((score, currentCharacter) => {
    return score + (ALPHABET.indexOf(currentCharacter) + 1)
  }, 0)
}

const high = sentence => {
  const words = sentence.split(' ')

  const wordsWithScore = words.map(word => {
    return { word: word, score: getWordScore(word) }
  })

  const wordsOrderedByScore = wordsWithScore.sort((a, b) => b.score - a.score)

  return wordsOrderedByScore[0].word
}
```
