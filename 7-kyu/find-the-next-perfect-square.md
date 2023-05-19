<h1>Find the next perfect square! <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/56269eb78ad2e4ced1000013">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGEBRA</code> <code>FUNDAMENTALS</code>
</sup>

## Description

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the `findNextSquare` method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then `-1` should be returned. You may assume the parameter is non-negative.

**Examples: (Input --> Output)**

```
121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
```

## Solution

```javascript
const findNextSquare = sq => {
  const squareRoot = Math.sqrt(sq)
  const isPerfectSquare = Number.isInteger(squareRoot)

  return isPerfectSquare ? Math.pow(squareRoot + 1, 2) : -1
}
```
