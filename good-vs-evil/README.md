# Good vs Evil - 6 kyu <br> :point_right: [Kata url](https://www.codewars.com/kata/52761ee4cffbc69732000738)

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

const BATTLE_RESULT = 'Battle Result:'
const GOOD_WIN_RESULT = 'Good triumphs over Evil'
const EVIL_WIN_RESULT = 'Evil eradicates all trace of Good'
const DRAW_RESULT = 'No victor on this battle field'

const getForce = (forceSide, string) => {
  return string
    .split(' ')
    .reduce(
      (totalForce, currentForce, index) =>
        forceSide === 'good'
          ? totalForce + GOOD_CREATURES_FORCE[index] * Number(currentForce)
          : totalForce + EVIL_CREATURES_FORCE[index] * Number(currentForce),
      0,
    )
}

const goodVsEvil = (good, evil) => {
  const goodForce = getForce('good', good)
  const evilForce = getForce('evil', evil)

  return `${BATTLE_RESULT} ${
    goodForce > evilForce
      ? GOOD_WIN_RESULT
      : evilForce > goodForce
      ? EVIL_WIN_RESULT
      : DRAW_RESULT
  }`
}
```
