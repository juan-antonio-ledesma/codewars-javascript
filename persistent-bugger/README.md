# [Persistent Bugger - 6 kyu](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec)

```javascript
const getMultiplication = number => {
  return String(number)
    .split('')
    .reduce(
      (multipliedNumber, currentNumber) =>
        multipliedNumber * Number(currentNumber),
    )
}

const persistence = number => {
  let counter = 0

  while (String(number).length > 1) {
    number = getMultiplication(number)
    counter++
  }

  return counter
}
```
