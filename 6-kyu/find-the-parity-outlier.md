# [Find The Parity Outlier](https://www.codewars.com/kata/5526fc09a1bbd946250002dc) · 6 kyu

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
