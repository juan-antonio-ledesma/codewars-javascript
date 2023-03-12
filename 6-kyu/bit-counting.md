<h1>Bit Counting <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/526571aae218b8ee490006f4">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>BITS</code> <code>ALGORITHMS</code>
</sup>

## Description

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

_Example_: The binary representation of `1234` is `10011010010`, so the function should return `5` in this case

## Solution

```javascript
const getBinary = num => {
  return num.toString(2)
}

const countBits = num => {
  const binaryNumber = getBinary(num)

  return binaryNumber.split('').reduce((acc, cur) => acc + Number(cur), 0)
}
```
