<h1>Exes and Ohs <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/55908aad6620c066bc00002a">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```

## Solution

```javascript
const getRepeatedNumberCharacters = (string, characterCompare) => {
  return string
    .toLowerCase()
    .split('')
    .filter(character => character === characterCompare).length
}

const XO = string => {
  const exes = getRepeatedNumberCharacters(string, 'x')
  const ohs = getRepeatedNumberCharacters(string, 'o')

  return exes === ohs
}
```
