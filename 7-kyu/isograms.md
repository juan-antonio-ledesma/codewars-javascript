<h1>Isograms <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/54ba84be607a92aa900000f1">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

**Example: (Input --> Output)**

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

```javascript
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
```

## Solution

```javascript
const isIsogram = str => {
  const sortArr = str.toLowerCase().split('').sort()

  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] === sortArr[i + 1]) return false
  }

  return true
}
```
