# [Checkered Board](https://www.codewars.com/kata/5650f1a6075b3284120000c0) · 6 kyu

```javascript
const getIsEven = number => number % 2 === 0

const checkeredBoard = dimension => {
  let oddRow = []
  let evenRow = []

  for (let i = 0; i < dimension; i++) {
    if (getIsEven(dimension)) {
      oddRow.push(getIsEven(i) ? '■' : '□')
      evenRow.push(getIsEven(i) ? '□' : '■')
    } else {
      oddRow.push(getIsEven(i) ? '□' : '■')
      evenRow.push(getIsEven(i) ? '■' : '□')
    }
  }

  oddRow = oddRow.join(' ')
  evenRow = evenRow.join(' ')

  const board = []

  for (let i = 0; i < dimension; i++) {
    board.push(getIsEven(i) ? evenRow : oddRow)
  }

  return board.join('\n')
}
```
