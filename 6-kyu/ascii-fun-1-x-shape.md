<h1>ASCII Fun #1: X-Shape <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5906436806d25f846400009b">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ASCII ART</code>
</sup>

## Description

You will get an odd integer `n` (>= 3) and your task is to draw an X. Each line is separated with `\n`.

Use the following characters: `■ □`

**Examples**

```
                                     ■□□□■
            ■□■                      □■□■□
  x(3) =>   □■□             x(5) =>  □□■□□
            ■□■                      □■□■□
                                     ■□□□■
```

## Solution

```javascript
const BLACK_BRICK = '□'
const WHITE_BRICK = '■'

const x = n => {
  let xShape = ''

  for (let i = 0; i < n; i++) {
    let row = BLACK_BRICK.repeat(n).split('')

    row[i] = WHITE_BRICK
    row[n - 1 - i] = WHITE_BRICK

    row = row.join('')
    xShape += `${row}\n`
  }

  return xShape.slice(0, -1)
}
```
