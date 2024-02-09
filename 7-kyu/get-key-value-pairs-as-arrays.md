<h1>Get key/value pairs as arrays <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/515dfd2f1db09667a0000003">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

```javascript
keysAndValues({ a: 1, b: 2, c: 3 }) // should return [['a', 'b', 'c'], [1, 2, 3]]
```

**Style Points (JS/CoffeeScript only):** This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

## Solution

```javascript
const keysAndValues = data => [Object.keys(data), Object.values(data)]
```
