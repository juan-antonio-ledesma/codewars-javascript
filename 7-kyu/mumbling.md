<h1>Mumbling <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5667e8f4e3f572a8f2000039">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>STRINGS</code> <code>PUZZLES</code>
</sup>

## Description

This time no story, no theory. The examples below show you how to write function `accum`:

**Examples:**

```
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```

The parameter of accum is a string which includes only letters from `a..z` and `A..Z`.

## Solution

```javascript
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const accum = string => {
  return string
    .split('')
    .map((letter, index) => {
      const repeatedLowercaseLetter = letter.toLowerCase().repeat(index)
      return capitalizeFirstLetter(repeatedLowercaseLetter)
    })
    .join('-')
}
```
