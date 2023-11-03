<h1>Shortest Word <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

## Solution

```javascript
const findShort = s => {
  const words = s.split(/\s+/)
  const wordsSortedAscendingLength = words.sort((a, b) => a.length - b.length)

  return wordsSortedAscendingLength[0].length
}
```
