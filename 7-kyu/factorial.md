<h1>Factorial <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/57a049e253ba33ac5e000212">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

Your task is to write function `factorial`.

[https://en.wikipedia.org/wiki/Factorial]()

## Solution

```javascript
const factorial = n => {
  let result = 1

  for (let i = 1; i < n + 1; i++) {
    result *= i
  }

  return result
}
```
