<h1>Find Cracker. <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/59f70440bee845599c000085">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>ARRAYS</code>
</sup>

## Description

Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score.

Example:

```javascript
var array = [
  ['name1', 445, ['B', 'A', 'A', 'C', 'A', 'A']],
  ['name2', 110, ['B', 'A', 'A', 'A']],
  ['name3', 200, ['B', 'A', 'A', 'C']],
  ['name4', 200, ['A', 'A', 'A', 'A', 'A', 'A', 'A']],
]
```

The scores for each grade is:

- A: 30 points
- B: 20 points
- C: 10 points
- D: 5 points
- Everything else: 0 points

If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring with this rule.

```javascript
var array = [
  ['name1', 445, ['B', 'A', 'A', 'C', 'A', 'A']], // name1 total point is over 200 => hacked
  ['name2', 110, ['B', 'A', 'A', 'A']], // name2 point is right
  ['name3', 200, ['B', 'A', 'A', 'C']], // name3 point is 200 but real point is 90 => hacked
  ,
  ['name4', 200, ['A', 'A', 'A', 'A', 'A', 'A', 'A']], // name4 point is right
]

return ['name1', 'name3']
```

## Solution

```javascript
const scoreTable = {
  A: 30,
  B: 20,
  C: 10,
  D: 5,
}

const calculateGradeScoresSum = array => {
  return array.reduce((acc, cur) => {
    const currentValue = scoreTable[cur] || 0
    return acc + currentValue
  }, 0)
}

const hasBonus = array => {
  return (
    array.length >= 5 && array.every(letter => letter === 'A' || letter === 'B')
  )
}

const findHack = array => {
  const result = []

  for (let i = 0; i < array.length; i++) {
    const [studentName, totalScore, gradeScores] = array[i]

    if (totalScore > 200) {
      result.push(studentName)
      continue
    }

    let gradeScoresSum = calculateGradeScoresSum(gradeScores)

    if (hasBonus(gradeScores)) gradeScoresSum += 20

    if (gradeScoresSum !== totalScore) result.push(studentName)
  }

  return result
}
```
