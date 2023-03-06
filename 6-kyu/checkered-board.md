# [Checkered Board](https://www.codewars.com/kata/5650f1a6075b3284120000c0) · 6 kyu

```javascript
const isEven = number => number % 2 === 0

const checkeredBoard = dimension => {
  let oddRow = []
  let evenRow = []

  for (let i = 0; i < dimension; i++) {
    if (isEven(dimension)) {
      oddRow.push(isEven(i) ? '■' : '□')
      evenRow.push(isEven(i) ? '□' : '■')
    } else {
      oddRow.push(isEven(i) ? '□' : '■')
      evenRow.push(isEven(i) ? '■' : '□')
    }
  }

  oddRow = oddRow.join(' ')
  evenRow = evenRow.join(' ')

  const board = []

  for (let i = 0; i < dimension; i++) {
    board.push(isEven(i) ? evenRow : oddRow)
  }

  return board.join('\n')
}
```
