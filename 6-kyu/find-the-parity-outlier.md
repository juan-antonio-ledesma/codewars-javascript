<h1>Find The Parity Outlier <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5526fc09a1bbd946250002dc">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code>
</sup>

## Description

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer `N`. Write a method that takes the array as an argument and returns this "outlier" `N`.

**Examples**

```javascript
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
```

## Solution

```javascript
const isEven = number => number % 2 === 0

const findOutlier = integers => {
  let evenCounter = 0

  for (let i = 0; i < 3; i++) {
    const currentNumber = integers[i]

    if (isEven(currentNumber)) evenCounter++
  }

  return evenCounter >= 2
    ? integers.filter(number => !isEven(number))[0]
    : integers.filter(number => isEven(number))[0]
}
```
