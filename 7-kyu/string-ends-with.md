<h1>String ends with? <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

```javascript
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
```

## Solution

```javascript
const solution = (str, ending) => str.endsWith(ending)
```
