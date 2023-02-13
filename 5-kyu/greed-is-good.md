# [Greed is Good](https://www.codewars.com/kata/5270d0d18625160ada0000e4) · 5 kyu

```javascript
const score = dice => {
  const diceRollsCounter = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }

  for (let i = 0; i < dice.length; i++) {
    diceRollsCounter[dice[i]]++
  }

  const totalScore = Object.values(diceRollsCounter).reduce((acc, cur, i) => {
    if (i === 0) {
      return acc + (cur % 3) * 100 + Math.trunc(cur / 3) * 1000
    } else if (i === 4) {
      return acc + (cur % 3) * 50 + Math.trunc(cur / 3) * 500
    } else {
      return acc + Math.trunc(cur / 3) * ((i + 1) * 100)
    }
  }, 0)

  return totalScore
}
```
