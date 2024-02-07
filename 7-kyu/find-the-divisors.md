<h1>Find the divisors! <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/544aed4c4a30184e960010f4">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>MATHEMATICS</code> <code>ALGORITHMS</code>
</sup>

## Description

Create a function named `divisors`/`Divisors` that takes an integer `n > 1` and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'.

**Examples**

```javascript
divisors(12) // should return [2,3,4,6]
divisors(25) // should return [5]
divisors(13) // should return "13 is prime"
```

## Solution

```javascript
const divisors = integer => {
  const divisors = []

  for (let i = 2; i <= integer / 2; ++i) {
    if (integer % i === 0) divisors.push(i)
  }

  return divisors.length === 0 ? `${integer} is prime` : divisors
}
```
