# [Mean Square Error](https://www.codewars.com/kata/51edd51599a189fe7f000015) · 5 kyu

```javascript
const getDifferenceBetweenTwoNumbersSquared = (num1, num2) => {
  return Math.pow(Math.abs(num1 - num2), 2)
}

const solution = (firstArray, secondArray) => {
  return (
    firstArray.reduce((acc, cur, ind) => {
      return acc + getDifferenceBetweenTwoNumbersSquared(cur, secondArray[ind])
    }, 0) / firstArray.length
  )
}
```
