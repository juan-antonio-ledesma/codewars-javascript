# [Take a Ten Minutes Walk - 6 kyu](https://www.codewars.com/kata/54da539698b8a2ad76000228)

```javascript
const WALK_LENGTH = 10

const isValidWalk = walk => {
  if (walk.length !== WALK_LENGTH) return false

  const stepCounter = {
    north: 0,
    south: 0,
    east: 0,
    west: 0,
  }

  walk.forEach(direction => {
    if (direction === 'n') stepCounter.north++
    if (direction === 's') stepCounter.south++
    if (direction === 'w') stepCounter.east++
    if (direction === 'e') stepCounter.west++
  })

  return (
    stepCounter.north === stepCounter.south &&
    stepCounter.east === stepCounter.west
  )
}
```
