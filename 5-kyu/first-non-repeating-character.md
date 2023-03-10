<h1>First non-repeating character <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/52bc74d4ac05d0945d00054e">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>ALGORITHMS</code>
</sup>

## Description

Write a function named `first_non_repeating_letter` that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input `'stress'`, the function should return `'t'`, since the letter _t_ only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the **same character**, but the function should return the correct case for the initial letter. For example, the input `'sTreSS'` should return `'T'`.

If a string contains _all repeating characters_, it should return an empty string (`""`) or `None` -- see sample tests.

## Solution

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
