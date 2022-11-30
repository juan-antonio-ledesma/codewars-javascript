# [Sort the odd](https://www.codewars.com/kata/578aa45ee9fd15ff4600090d) · 6 kyu

```javascript
const sortArray = array => {
  const oddNumbersSorted = array
    .filter(number => number % 2 !== 0)
    .sort((a, b) => a - b)

  let oddPlaced = 0

  return array.map(number => {
    if (number % 2 === 0) return number

    return oddNumbersSorted[oddPlaced++]
  })
}
```
