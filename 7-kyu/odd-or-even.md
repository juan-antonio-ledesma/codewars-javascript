<h1>Odd or Even? <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5949481f86420f59480000e7">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>ARRAYS</code>
</sup>

## Description

**Task:**

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching `"odd"` or `"even"`.

If the input array is empty consider it as: `[0]` (array with a zero).

**Examples:**

```
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
```

Have fun!

## Solution

```javascript
const oddOrEven = array => {
  const sum = array.reduce((acc, cur) => acc + cur, 0)

  return sum % 2 === 0 ? 'even' : 'odd'
}
```
