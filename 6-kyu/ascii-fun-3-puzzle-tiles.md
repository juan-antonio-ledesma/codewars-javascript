<h1>ASCII Fun #3: Puzzle Tiles <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5947d86e07693bcf000000c4">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ASCII ART</code>
</sup>

## Description

You will get two **Integer** `n` (width) and `m` (height) and your task is to draw following pattern. Each line is seperated with `'\n'`.

- Both integers are equal or greater than 1. No need to check for invalid parameters.
- There are no whitespaces at the end of each line.

For example, for `width = 4` and `height = 3`, you should draw the following pattern:

```
   _( )__ _( )__ _( )__ _( )__
 _|     _|     _|     _|     _|
(_   _ (_   _ (_   _ (_   _ (_
 |__( )_|__( )_|__( )_|__( )_|
 |_     |_     |_     |_     |_
  _) _   _) _   _) _   _) _   _)
 |__( )_|__( )_|__( )_|__( )_|
 _|     _|     _|     _|     _|
(_   _ (_   _ (_   _ (_   _ (_
 |__( )_|__( )_|__( )_|__( )_|
```

## Solution

```javascript
const BLANK_SPACE = ' '

const FIRST_ROW = '_( )__ '

const ODD_ROW_1 = '_|     '
const END_ODD_ROW_1 = '_|'
const ODD_ROW_2 = '(_   _ '
const END_ODD_ROW_2 = '(_'
const ODD_ROW_3 = '|__( )_'
const END_ODD_ROW_3 = '|'

const EVEN_ROW_1 = '|_     '
const END_EVEN_ROW_1 = '|_'
const EVEN_ROW_2 = '_) _   '
const END_EVEN_ROW_2 = '_)'
const EVEN_ROW_3 = '|__( )_'
const END_EVEN_ROW_3 = '|'

const puzzleTiles = (width, height) => {
  const result = []

  for (let i = 1; i < height + 1; i++) {
    if (i === 1) {
      const firstRow = `${BLANK_SPACE.repeat(3)}${FIRST_ROW.repeat(width)}`
      result.push(firstRow.slice(0, -1))
    }

    if (i % 2 !== 0) {
      const row1 = `${BLANK_SPACE}${ODD_ROW_1.repeat(width)}${END_ODD_ROW_1}`
      result.push(row1)
      const row2 = `${ODD_ROW_2.repeat(width)}${END_ODD_ROW_2}`
      result.push(row2)
      const row3 = `${BLANK_SPACE}${ODD_ROW_3.repeat(width)}${END_ODD_ROW_3}`
      result.push(row3)
    } else {
      const row1 = `${BLANK_SPACE}${EVEN_ROW_1.repeat(width)}${END_EVEN_ROW_1}`
      result.push(row1)
      const row2 = `${BLANK_SPACE.repeat(2)}${EVEN_ROW_2.repeat(
        width,
      )}${END_EVEN_ROW_2}`
      result.push(row2)
      const row3 = `${BLANK_SPACE}${EVEN_ROW_3.repeat(width)}${END_EVEN_ROW_3}`
      result.push(row3)
    }
  }

  return result.join('\n')
}
```
