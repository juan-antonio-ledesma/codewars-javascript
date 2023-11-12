<h1>Array2Binary addition <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/559576d984d6962f8c00003c">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

**Note:** The sum of an empty array is zero.

```javascript
const arr2bin = arr => {
  arr2bin([1, 2]) == '11'
  arr2bin([1, 2, 'a']) == false
}
```

## Solution

```javascript
const arr2bin = arr => {
  if (arr.some(element => typeof element !== 'number')) return false

  return arr.reduce((acc, cur) => acc + cur, 0).toString(2)
}
```
