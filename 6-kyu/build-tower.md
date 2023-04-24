<h1>Build Tower <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/576757b1df89ecf5bd00073b">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>ASCII ART</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer `number of floors`. A tower block is represented with `"*"` character.

For example, a tower with `3` floors looks like this:

```
[
  "  *  ",
  " *** ",
  "*****"
]
```

And a tower with `6` floors looks like this:

```
[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]
```

## Solution

```javascript
const towerBuilder = nFloors => {
  const piramidBase = nFloors * 2 - 1
  let floorsArray = []

  for (let i = 1; i < nFloors + 1; i++) {
    const currentFloorBase = i * 2 - 1
    const bricks = '*'.repeat(currentFloorBase)
    const spaceDifference = (piramidBase - currentFloorBase) / 2
    const blankSpace = ' '.repeat(spaceDifference)

    const floorBuilt = `${blankSpace}${bricks}${blankSpace}`

    floorsArray.push(floorBuilt)
  }

  return floorsArray
}
```
