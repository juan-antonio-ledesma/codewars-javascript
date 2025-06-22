<h1>Sum of positive <sup><sup>8 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5715eaedb436cf5606000381">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

**Task**

You get an array of numbers, return the sum of all of the positives ones.

**Example**

- `[1, -4, 7, 12]` => 1 + 7 + 12 = 20

**Note**

If there is nothing to sum, the sum is default to `0`.

## Solution

```javascript
const positiveSum = arr => {
  return arr.reduce((acc, cur) => {
    return acc + (cur > 0 ? cur : 0)
  }, 0)
}
```
