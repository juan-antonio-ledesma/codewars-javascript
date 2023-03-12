<h1>Sum of Digits / Digital Root <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/541c8630095125aba6000c00">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>MATHEMATICS</code> <code>ALGORITHMS</code>
</sup>

## Description

[Digital root](https://en.wikipedia.org/wiki/Digital_root) is the _recursive sum of all the digits in a number._

Given `n`, take the sum of the digits of `n`. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

**Examples**

```
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
```

## Solution

```javascript
const getSum = number => {
  return String(number)
    .split('')
    .reduce(
      (totalAdded, currentNumber) => totalAdded + Number(currentNumber),
      0,
    )
}

const digital_root = number => {
  while (String(number).length > 1) {
    number = getSum(number)
  }

  return number
}
```
