<h1>Only one <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5734c38da41454b7f700106e">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code>
</sup>

## Description

Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.

```javascript
onlyOne() --> false
onlyOne(true, false, false) --> true
onlyOne(true, false, false, true) --> false
onlyOne(false, false, false, false) --> false
```

## Solution

```javascript
const onlyOne = (...flags) => flags.filter(value => value).length === 1
```
