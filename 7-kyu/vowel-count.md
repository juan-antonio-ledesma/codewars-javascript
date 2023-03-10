<h1>Vowel Count <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/54ff3102c1bad923760001f3">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Return the number (count) of vowels in the given string.

We will consider `a`, `e`, `i`, `o`, `u` as vowels for this Kata (but not `y`).

The input string will only consist of lower case letters and/or spaces.

## Solution

```javascript
const onlyVowelsRegex = new RegExp(/[^aeiou]+/, 'gi')

const getCount = string => string.replace(onlyVowelsRegex, '').length
```
