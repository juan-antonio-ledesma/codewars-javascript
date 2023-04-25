<h1>ASCII Fun #2: Funny Dots <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/59098c39d8d24d12b6000020">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ASCII ART</code>
</sup>

## Description

You will get two integers `n` (width) and `m` (height) and your task is to draw the following pattern. Each line is seperated with a newline (`\n`)

Both integers are equal or greater than 1; no need to check for invalid parameters.

**Examples**

```
                                            +---+---+---+
             +---+                          | o | o | o |
dot(1, 1) => | o |            dot(3, 2) =>  +---+---+---+
             +---+                          | o | o | o |
                                            +---+---+---+
```

## Solution

```javascript
const SIMPLE_ROW_CHARACTERS = '+---'
const END_SIMPLE_ROW_CHARACTERS = '+'
const DOT_ROW_CHARACTERS = '| o '
const END_DOT_ROW_CHARACTERS = '|'

const dot = (width, height) => {
  let result = []

  const simpleRow = `${SIMPLE_ROW_CHARACTERS.repeat(
    width,
  )}${END_SIMPLE_ROW_CHARACTERS}`

  const donutRow = `${DOT_ROW_CHARACTERS.repeat(
    width,
  )}${END_DOT_ROW_CHARACTERS}`

  for (let i = 0; i < height; i++) {
    result.push(simpleRow)
    result.push(donutRow)
  }
  result.push(simpleRow)

  return result.join('\n')
}
```
