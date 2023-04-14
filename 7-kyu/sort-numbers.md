<h1>Sort Numbers <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5174a4c0f2769dd8b1000003">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

```javascript
solution([1, 2, 10, 50, 5]) // should return [1,2,5,10,50]
solution(null) // should return []
```

## Solution

```javascript
const solution = nums => (nums === null ? [] : nums.sort((a, b) => a - b))
```
