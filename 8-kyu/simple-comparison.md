<h1>Simple Comparison? <sup><sup>8 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/57f6ecdfcca6e045d2001207">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>STRINGS</code>
</sup>

## Description

Write a function that will compare two values, one will be a number and one will be a string. Return `true` if they are the same character (regardless of their different data types) and return `false` if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including `.toString()`, `.join()`, `.split()`, `parseInt` and `.Number()`.

## Solution

```javascript
const add = (a, b) => a == b
```
