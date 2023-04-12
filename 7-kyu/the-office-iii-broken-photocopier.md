<h1>The Office III - Broken Photocopier <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/57ed56657b45ef922300002b">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>STRINGS</code> <code>ARRAYS</code>
</sup>

## Description

The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.

## Solution

```javascript
const pairs = {
  1: '0',
  0: '1',
}

const broken = x => {
  const result = x.split('')
  return result.map(character => pairs[character]).join('')
}
```
