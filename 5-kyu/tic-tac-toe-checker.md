<h1>Tic-Tac-Toe Checker <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/525caa5c1bf619d28c000335">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>ALGORITHMS</code>
</sup>

## Description

If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is `0` if a spot is empty, `1` if it is an "X", or `2` if it is an "O", like so:

```
[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
```

We want our function to return:

- `-1` if the board is not yet finished AND no one has won yet (there are empty spots),
- `1` if "X" won,
- `2` if "O" won,
- `0` if it's a cat's game (i.e. a draw).

You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

## Solution

```javascript
const isSolved = board => {
  const [row1, row2, row3] = board
  const column1 = [row1[0], row2[0], row3[0]]
  const column2 = [row1[1], row2[1], row3[1]]
  const column3 = [row1[2], row2[2], row3[2]]
  const diagonal1 = [row1[0], row2[1], row3[2]]
  const diagonal2 = [row1[2], row2[1], row3[0]]

  const combinations = [
    row1,
    row2,
    row3,
    column1,
    column2,
    column3,
    diagonal1,
    diagonal2,
  ]

  for (let i = 0; i < combinations.length; i++) {
    const currentCombination = combinations[i].join('')

    if (currentCombination === '111') return 1
    if (currentCombination === '222') return 2
  }

  for (let i = 0; i < combinations.length; i++) {
    const currentCombination = combinations[i]

    if (currentCombination.indexOf(0) !== -1) return -1
  }

  return 0
}
```
