<h1>ASCII Fun #4: Build a pyramid <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/594a5d8f704e4d5561000019">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ASCII ART</code>
</sup>

## Description

You will get a string `s` with an even length, and an integer `n` which represents the height of the pyramid and your task is to draw the following pattern. Each line is seperated with `"\n"`.

- n will always be greater than 3. No need to check for invalid parameters
- There are no whitespaces at the end of the lines

**Example**

`build_pyramid("00-00..00-00", 7)` should return:

```
                                    00-00..00-00
                              0000--0000....0000--0000
                        000000---000000......000000---000000
                   00000000----00000000........00000000----00000000
            0000000000-----0000000000..........0000000000-----0000000000
      000000000000------000000000000............000000000000------000000000000
00000000000000-------00000000000000..............00000000000000-------00000000000000
```

## Solution

```javascript
const HYPHEN = '-'
const BLANK_SPACE = ' '

const getMainBricks = (str, num, multiplier) =>
  `${str.repeat(num * multiplier)}`
const getHyphens = num => `${HYPHEN.repeat(num)}`
const getSeparation = (str, num) => `${str.repeat(num * 2)}`

const buildPyramid = (string, height) => {
  const mainBrick = string.charAt(0)
  const separator = string.charAt(string.length / 2)
  const brickMultiplier = string.split(HYPHEN)[0].length

  const baseMainBricks = getMainBricks(mainBrick, height, brickMultiplier)
  const baseHyphens = getHyphens(height)
  const baseSeparation = getSeparation(separator, height)
  const halfBaseWithoutSeparation = `${baseMainBricks}${baseHyphens}${baseMainBricks}`
  const base = `${halfBaseWithoutSeparation}${baseSeparation}${halfBaseWithoutSeparation}`
  const baseLength = base.length

  const result = []

  for (let i = 1; i < height; i++) {
    const rowMainBriks = getMainBricks(mainBrick, i, brickMultiplier)
    const rowHyphens = getHyphens(i)
    const rowSeparation = getSeparation(separator, i)
    const halfRowWithoutSeparation = `${rowMainBriks}${rowHyphens}${rowMainBriks}`
    let row = `${halfRowWithoutSeparation}${rowSeparation}${halfRowWithoutSeparation}`
    const rowLength = row.length

    const rowBlankSpace = `${BLANK_SPACE.repeat((baseLength - rowLength) / 2)}`
    row = `${rowBlankSpace}${row}`
    result.push(row)
  }

  result.push(base)

  return result.join('\n')
}
```
