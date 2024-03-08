<h1>Number of trailing zeros of N! <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/52f787eb172a8b4ae1000a34">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code> <code>LOGIC</code> <code>MATHEMATICS</code>
</sup>

## Description

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

`N! = 1 * 2 * 3 *  ... * N`

Be careful `1000!` has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

**Examples**

```python
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
```

_Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros._

## Solution

```javascript
const zeros = n => {
  let zeros = 0

  while (n > 0) {
    n = Math.floor(n / 5)
    zeros += n
  }

  return zeros
}
```
