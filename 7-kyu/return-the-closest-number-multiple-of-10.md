<h1>Return the closest number multiple of 10 <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/58249d08b81f70a2fc0001a4">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>MATHEMATICS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Given a number return the closest number to it that is divisible by 10.

Example input:

```
22
25
37
```

Expected output:

```
20
30
40
```

## Solution

```javascript
const closestMultiple10 = num => {
  const number = Math.trunc(num)

  const lastNumber = Number(number.toString().slice(-1))
  const difference = lastNumber >= 5 ? 10 - lastNumber : lastNumber * -1

  return number + difference
}
```
