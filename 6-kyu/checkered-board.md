<h1>Checkered Board <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5650f1a6075b3284120000c0">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>ASCII ART</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Write a function which takes one parameter representing the dimensions of a checkered board. The board will always be square, so 5 means you will need a 5x5 board.

The dark squares will be represented by a unicode white square, while the light squares will be represented by a unicode black square (the opposite colours ensure the board doesn't look reversed on code wars' dark background). It should return a string of the board with a space in between each square and taking into account new lines.

An even number should return a board that begins with a dark square. An odd number should return a board that begins with a light square.

**Examples**

```
Input: 5

Output:
■ □ ■ □ ■
□ ■ □ ■ □
■ □ ■ □ ■
□ ■ □ ■ □
■ □ ■ □ ■
```

**There should be no trailing white space at the end of each line, or new line characters at the end of the string.**

**Note**

The squares are characters `■` and `□` with codes `\u25A0` and `\u25A1`.<br>
Do not use HTML entities for the squares (e.g. `□` for white square) as the code doesn't consider it a valid square. A good way to check is if your solution prints
a correct checker board on your local terminal.

## Solution

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
