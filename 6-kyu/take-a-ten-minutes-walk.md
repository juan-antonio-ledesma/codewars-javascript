<h1>Take a Ten Minutes Walk <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/54da539698b8a2ad76000228">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return **false** otherwise.

> **_Note:_** _you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!)._

## Solution

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
