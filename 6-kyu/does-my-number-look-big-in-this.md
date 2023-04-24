<h1>Does my number look big in this? <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5287e858c6b5a9678200083c">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code>
</sup>

## Description

A [Narcissistic Number](https://en.wikipedia.org/wiki/Narcissistic_number) (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

```
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
```

and 1652 (4 digits), which isn't:

```
1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
```

The Challenge:

Your code must return **true** or **false** (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

## Solution

```javascript
const narcissistic = value => {
  const numbersArray = value.toString().split('')
  const exponent = numbersArray.length

  const totalSum = numbersArray.reduce((acc, curr) => {
    const currentNumber = Number(curr)
    return acc + Math.pow(currentNumber, exponent)
  }, 0)

  return totalSum === value
}
```
