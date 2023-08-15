<h1>Sort array by string length <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>SORTING</code> <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

`["Telescopes", "Glasses", "Eyes", "Monocles"]`

Your function would return the following array:

`["Eyes", "Glasses", "Monocles", "Telescopes"]`

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

## Solution

```javascript
const sortByLength = array => array.sort((a, b) => a.length - b.length)
```
