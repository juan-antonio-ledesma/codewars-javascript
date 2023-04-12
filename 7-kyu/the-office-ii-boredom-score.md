<h1>The Office II - Boredom Score <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/57ed4cef7b45ef8774000014">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1<br>
finance = 2<br>
canteen = 10<br>
regulation = 3<br>
trading = 6<br>
change = 6<br>
IS = 8<br>
retail = 5<br>
cleaning = 4<br>
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'<br>
< 100 & > 80: 'i can handle this'<br>
100 or over: 'party time!!'

## Solution

```javascript
const pairs = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  'pissing about': 25,
}

const boredom = staff => {
  const boredomValues = Object.values(staff)
  const boredomScore = boredomValues.reduce(
    (accumulator, currentValue) => accumulator + pairs[currentValue],
    0,
  )

  return boredomScore <= 80
    ? 'kill me now'
    : boredomScore < 100 && boredomScore > 80
    ? 'i can handle this'
    : 'party time!!'
}
```
