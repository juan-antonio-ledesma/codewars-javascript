<h1>Count the divisors of a number <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/542c0f198e077084c0000c2e">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>NUMBER THEORY</code> <code>MATHEMATICS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Count the number of divisors of a positive integer `n`.

Random tests go up to `n = 500000`.

**Examples (input --> output)**

```
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
```

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

## Solution

```javascript
const getDivisorsCnt = n => {
  let count = 0

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === Math.sqrt(n)) {
        count++
      } else {
        count += 2
      }
    }
  }

  return count
}
```
