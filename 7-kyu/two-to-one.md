<h1>Two to One <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5656b6906de340bd1b0000ac">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

**Examples:**

```
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
```

## Solution

```javascript
const longest = (s1, s2) => {
  const stringsConcated = s1 + s2

  const stringWithoutRepeatedLetters = new Set(stringsConcated.split(''))

  return Array.from(stringWithoutRepeatedLetters).sort().join('')
}
```
