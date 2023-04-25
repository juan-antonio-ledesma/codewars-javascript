<h1>Human Readable Time <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/52685f7382004e774f0001f7">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>DATE TIME</code> <code>MATHEMATICS</code> <code>ALGORITHMS</code>
</sup>

## Description

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (`HH:MM:SS`)

- `HH` = hours, padded to 2 digits, range: 00 - 99
- `MM` = minutes, padded to 2 digits, range: 00 - 59
- `SS` = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (`99:59:59`)

You can find some examples in the test fixtures.

## Solution

```javascript
const UNITS_IN_SECONDS = {
  HOUR: 3600,
  MINUTE: 60,
  SECOND: 1,
}

const humanReadable = seconds => {
  let remainingSeconds = seconds
  const result = []

  for (const unit in UNITS_IN_SECONDS) {
    if (remainingSeconds >= UNITS_IN_SECONDS[unit]) {
      const currentUnit = Math.trunc(remainingSeconds / UNITS_IN_SECONDS[unit])
      remainingSeconds -= UNITS_IN_SECONDS[unit] * currentUnit
      result.push(currentUnit < 10 ? `0${currentUnit}` : currentUnit)
    } else {
      result.push('00')
    }
  }

  return result.join(':')
}
```
