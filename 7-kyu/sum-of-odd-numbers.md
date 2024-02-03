<h1>Sum of odd numbers <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/55fd2d567d94ac3bc9000064">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>LISTS</code> <code>MATHEMATICS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Given the triangle of consecutive odd numbers:

```
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
```

Calculate the sum of the numbers in the n<sup>th</sup> row of this triangle (starting at index 1) e.g.: (**Input --> Output**)

```
1 -->  1
2 --> 3 + 5 = 8
```

## Solutions

```javascript
const rowSumOddNumbers = n => {
  const firstOdd = n * (n - 1) + 1

  let sum = 0

  for (let i = 0; i < n; i++) {
    sum += firstOdd + 2 * i
  }

  return sum
}
```

```javascript
const rowSumOddNumbers = n => n * n * n
```
