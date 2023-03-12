<h1>Detect Pangram <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/545cedaa9943f7fe7b000048">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>DATA STRUCTURES</code> <code>FUNDAMENTALS</code>
</sup>

## Description

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

## Solution

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
