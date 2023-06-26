<h1>Triangle of Multiples (Easy One) <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/58ecc0a8342ee5e920000115">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>MATHEMATICS</code> <code>DATA STRUCTURES</code> <code>FUNDAMENTALS</code>
</sup>

## Description

See the following triangle:

```
____________________________________
 1
 2   4   2
 3   6   9   6   3
 4   8   12  16  12  8   4
 5   10  15  20  25  20  15  10  5
 ___________________________________
```

The total sum of the numbers in the triangle, up to the 5th line included, is `225`, part of it, `144`, corresponds to the total sum of the even terms and `81` to the total sum of the odd terms.

Create a function that may output an array with three results for each value of n.

```
triang_mult(n)  ----> [total_sum, total_even_sum, total_odd_sum]
```

Our example will be:

```javascript
triang_mult(5) ----> [225, 144, 81]
```

Features of the random tests:

```
number of tests = 100
49 < n < 5000
```

Enjoy it!

## Solution

```javascript
const isEven = num => num % 2 === 0

const multTriangle = n => {
  let evenSum = 0
  let oddSum = 0
  let totalSum = 0

  for (let i = 1; i < n + 1; i++) {
    const cuspidRow = Math.pow(i, 2)
    isEven(cuspidRow) ? (evenSum += cuspidRow) : (oddSum += cuspidRow)

    let halfRowWithoutCuspidSumEven = 0
    let halfRowWithoutCuspidSumOdd = 0

    for (let j = 1; j < i; j++) {
      const currentNumber = i * j

      isEven(currentNumber)
        ? (halfRowWithoutCuspidSumEven += currentNumber)
        : (halfRowWithoutCuspidSumOdd += currentNumber)
    }

    evenSum += halfRowWithoutCuspidSumEven * 2
    oddSum += halfRowWithoutCuspidSumOdd * 2
    totalSum = evenSum + oddSum
  }

  return [totalSum, evenSum, oddSum]
}
```
