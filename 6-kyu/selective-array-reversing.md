# [Selective Array Reversing](https://www.codewars.com/kata/58f6000bc0ec6451960000fd) · 6 kyu

```javascript
const selReverse = (array, portionLength) => {
  if (portionLength === 0) return array

  const result = []

  for (let i = 0; i < array.length; i += portionLength) {
    const currentPortionReversed = array.slice(i, i + portionLength).reverse()

    result.push(currentPortionReversed)
  }

  return result.flat()
}
```
