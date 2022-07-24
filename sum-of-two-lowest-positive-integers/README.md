# [Sum of two lowest positive integers - 7 kyu](https://www.codewars.com/kata/558fc85d8fd1938afb000014)

```javascript
const sumTwoSmallestNumbers = numbers => {
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, curr) => acc + curr)
}
```
