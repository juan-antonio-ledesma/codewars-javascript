<h1>Find the odd int <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/54da5a58ea159efa38000836">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

**Examples**

`[7]` should return `7`, because it occurs 1 time (which is odd).<br>
`[0]` should return `0`, because it occurs 1 time (which is odd).<br>
`[1,1,2]` should return `2`, because it occurs 1 time (which is odd).<br>
`[0,1,0,1,0]` should return `0`, because it occurs 3 times (which is odd).<br>
`[1,2,2,3,3,3,4,3,3,3,2,2,1]` should return `4`, because it appears 1 time (which is odd).

## Solution

```javascript
const findOdd = A => {
  const objRepetitions = A.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] = acc[curr] + 1
    } else {
      acc[curr] = 1
    }
    return acc
  }, {})

  const result = Object.entries(objRepetitions).filter(
    ([num, repetitions]) => repetitions % 2 !== 0,
  )

  return Number(result[0][0])
}
```
