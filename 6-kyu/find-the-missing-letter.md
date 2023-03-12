<h1>Find the missing letter <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5839edaa6754d6fec10000a2">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>MATHEMATICS</code> <code>ALGORITHMS</code>
</sup>

## Description

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2. The array will always contain letters in only one case.

Example:

```
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
```

(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

## Solution

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
