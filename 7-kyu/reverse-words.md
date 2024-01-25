<h1>Reverse words <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5259b20d6021e9e14c0010d4">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

**Examples**

```
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
```

## Solution

```javascript
const reverseWords = str => {
  return str
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ')
}
```
