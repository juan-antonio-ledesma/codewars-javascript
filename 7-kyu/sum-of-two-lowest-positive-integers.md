# [Sum of two lowest positive integers](https://www.codewars.com/kata/558fc85d8fd1938afb000014) · 7 kyu

```javascript
const sumTwoSmallestNumbers = numbers => {
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, curr) => acc + curr)
}
```
