<h1>Stop gninnipS My sdroW! <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5264d2b162488dc400000001">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>ALGORITHMS</code>
</sup>

## Description

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

```
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"
```

## Solution

```javascript
const reverseWord = string => string.split('').reverse().join('')

const spinWords = string => {
  const words = string.split(' ')

  const result = words.map(word => (word.length > 4 ? reverseWord(word) : word))

  return result.join(' ')
}
```
