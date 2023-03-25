<h1>Beginner Series #3 Sum of Numbers <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/55f2b110f61eb01779000053">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>ALGORITHMS</code>
</sup>

## Description

Given two integers `a` and `b`, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return `a` or `b`.

**Note:** `a` and `b` are not ordered!

**Examples (a, b) --> output (explanation)**

```
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

```

Your function should only return a number, not the explanation about how you get that number.

## Solution

```javascript
const getSum = (a, b) => {
  if (a === b) return a

  const minNumber = Math.min(a, b)
  const maxNumber = Math.max(a, b)

  const arrayNumbers = []

  for (let i = minNumber; i <= maxNumber; i++) {
    arrayNumbers.push(i)
  }

  return arrayNumbers.reduce((acc, cur) => acc + cur)
}
```
