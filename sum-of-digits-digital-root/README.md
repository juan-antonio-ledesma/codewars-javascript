# [Sum of Digits / Digital Root - 6 kyu](https://www.codewars.com/kata/541c8630095125aba6000c00)

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
