<h1>Find the unique number <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/585d7d5adb20cf33cb000235">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>ALGORITHMS</code> <code>ARRAYS</code>
</sup>

## Description

There is an array with some numbers. All numbers are equal except for one. Try to find it!

```javascript
findUniq([1, 1, 1, 2, 1, 1]) === 2
findUniq([0, 0, 0.55, 0, 0]) === 0.55
```

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

## Solution

```javascript
const findUniq = arr => {
  const firstThreeNumbersOrdered = arr.slice(0, 3).sort((a, b) => a - b)
  const repeatedNumber =
    firstThreeNumbersOrdered[1] === firstThreeNumbersOrdered[2]
      ? firstThreeNumbersOrdered[2]
      : firstThreeNumbersOrdered[0]

  return arr.filter(number => number != repeatedNumber)[0]
}
```
