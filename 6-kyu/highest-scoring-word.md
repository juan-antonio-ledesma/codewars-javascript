<h1>Highest Scoring Word <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/57eb8fcdf670e99d9b000272">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>STRINGS</code> <code>ARRAYS</code>
</sup>

## Description

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: `a = 1, b = 2, c = 3` etc.

For example, the score of `abad` is `8` (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

## Solution

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
