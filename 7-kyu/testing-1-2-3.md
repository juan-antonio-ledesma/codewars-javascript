<h1>Testing 1-2-3 <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is `n: string`. Notice the colon and space in between.

**Examples: (Input --> Output)**

```
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
```

## Solution

```javascript
const number = array => {
  return array.map((element, index) => `${index + 1}: ${element}`)
}
```
