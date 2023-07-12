<h1>Count characters in your string <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/52efefcbcdf57161d4000091">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be `{'a': 2, 'b': 1}`.

What if the string is empty? Then the result should be empty object literal, `{}`.

## Solution

```javascript
const count = string => {
  const result = {}

  for (let i = 0; i < string.length; i++) {
    const character = string.charAt(i)

    result[character] ? result[character]++ : (result[character] = 1)
  }

  return result
}
```
