<h1>Sorted Union <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5729c30961cecadc4f001878">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>LISTS</code> <code>ALGORITHMS</code> <code>SORTING</code>
</sup>

## Description

Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

## Solution

```javascript
const uniteUnique = (...array) => [...new Set(array.flat())]
```
