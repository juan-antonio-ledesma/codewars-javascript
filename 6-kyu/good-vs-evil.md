# [Good vs Evil](https://www.codewars.com/kata/52761ee4cffbc69732000738) · 6 kyu

```javascript
const GOOD_CREATURES_FORCE = [
  1, // Hobbits
  2, // Men
  3, // Elves
  3, // Dwarves
  4, // Eagles
  10, // Wizards
]

const EVIL_CREATURES_FORCE = [
  1, // Orcs
  2, // Men
  2, // Wargs
  2, // Goblins
  3, // Uruk Hai
  5, // Trolls
  10, // Wizards
]

const getForce = (forceSide, raceCounting) => {
  return raceCounting.split(' ').reduce((totalForce, currentForce, index) => {
    return totalForce + forceSide[index] * Number(currentForce)
  }, 0)
}

const goodVsEvil = (good, evil) => {
  const goodForce = getForce(GOOD_CREATURES_FORCE, good)
  const evilForce = getForce(EVIL_CREATURES_FORCE, evil)

  return `Battle Result: ${
    goodForce > evilForce
      ? 'Good triumphs over Evil'
      : evilForce > goodForce
      ? 'Evil eradicates all trace of Good'
      : 'No victor on this battle field'
  }`
}
```
