<h1>Small enough? - Beginner <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/57cc981a58da9e302a000214">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>ARRAYS</code>
</sup>

## Description

You will be given an `array` and a `limit` value. You must check that all values in the array are below or equal to the limit value. If they are, return `true`. Else, return `false`.

You can assume all values in the array are numbers.

## Solution

```javascript
const smallEnough = (array, limit) => array.every(number => number <= limit)
```
