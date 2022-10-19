# [Don't Drink the Water - 5 kyu](https://www.codewars.com/kata/54e6533c92449cc251001667)

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
