<h1>What century is it? <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/52fb87703c1351ebd200081f">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code>  <code>ALGORITHMS</code> <code>DATE TIME</code>
</sup>

## Description

Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

```
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
```

## Solution

```javascript
const whatCentury = year => {
  const century = Math.ceil(Number(year) / 100)
  const suffix =
    century === 11 || century === 12 || century === 13
      ? 'th'
      : century % 10 === 1
      ? 'st'
      : century % 10 === 2
      ? 'nd'
      : century % 10 === 3
      ? 'rd'
      : 'th'

  return `${century}${suffix}`
}
```
