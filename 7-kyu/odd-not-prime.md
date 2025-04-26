<h1>Odd Not Prime <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5a9996fa8e503f2b4a002e7a">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code>
</sup>

## Description

For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.

Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2

## Solution

```javascript
const isPrime = n => {
  if (n <= 1) return false

  if (n <= 3) return true

  if (n % 2 === 0 || n % 3 === 0) return false

  let i = 5

  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false
    i += 6
  }

  return true
}

const oddNotPrime = n => {
  let count = 0

  for (let i = 1; i <= n; i += 2) {
    if (!isPrime(i)) count++
  }

  return count
}
```
