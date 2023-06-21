<h1>Number Format <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/565c4e1303a0a006d7000127">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>REGULAR EXPRESSIONS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Format any integer provided into a string with "," (commas) in the correct places.

**Example:**

```
For n = 100000 the function should return '100,000';
For n = 5678545 the function should return '5,678,545';
for n = -420902 the function should return '-420,902'.
```

## Solution

```javascript
const numberFormat = number => {
  const absoluteNumber = Math.abs(number)

  const numberFormatted = String(absoluteNumber)
    .split('')
    .reverse()
    .join('')
    .match(/.{1,3}/g)
    .join(',')
    .split('')
    .reverse()
    .join('')

  return number < 0 ? `-${numberFormatted}` : numberFormatted
}
```
