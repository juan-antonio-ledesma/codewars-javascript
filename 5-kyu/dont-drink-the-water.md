<h1>Don't Drink the Water <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/562e6df5cf2d3908ad00019e">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code> <code>ARRAYS</code> <code>SORTING</code> <code>LISTS</code>
</sup>

## Description

Don't Drink the Water

Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

```
======================
|   Density Chart    |
======================
| Honey   | H | 1.36 |
| Water   | W | 1.00 |
| Alcohol | A | 0.87 |
| Oil     | O | 0.80 |
----------------------

[                            [
 ['H', 'H', 'W', 'O'],        ['O','O','O','O']
 ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
 ['H', 'H', 'O', 'O']         ['H','H','H','H']
]                            ]
```

The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.

## Solution

```javascript
const densityTable = {
  O: 0.8, // Oil
  A: 0.87, // Alcohol
  W: 1, // Water
  H: 1.36, // Honey
}

const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value)
}

const getMixedLiquids = array => {
  let result = ''

  array.forEach(currentLiquidLayer => (result += currentLiquidLayer.join('')))

  return result.split('')
}

const separateLiquids = glass => {
  if (glass.length === 0) return []

  const mixedLiquids = getMixedLiquids(glass)

  const orderedDensities = mixedLiquids
    .map(liquidType => densityTable[liquidType])
    .sort((a, b) => a - b)

  const liquidsSortedByDensity = orderedDensities.map(density => {
    return getKeyByValue(densityTable, density)
  })

  const result = []

  const glassWidth = glass[0].length
  const glassHeight = glass.length

  for (let i = 1; i < glassHeight + 1; i++) {
    const currentLiquidLayer = liquidsSortedByDensity.slice(
      i * glassWidth - glassWidth,
      i * glassWidth,
    )

    result.push(currentLiquidLayer)
  }

  return result
}
```
