<h1>Disemvowel Trolls <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/52fba66badcd10859f00097e">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>REGULAR EXPRESSIONS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata `y` isn't considered a vowel.

## Solution

```javascript
const disemvowel = str => {
  const regexVowels = /[aeiou]/gi
  return str.replace(regexVowels, '')
}
```
