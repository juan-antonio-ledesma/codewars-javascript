<h1>Naughty or Nice <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5662b14e0a1fb8320a00005c">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>JSON</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

```javascript
{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}
```

Your function should return `"Naughty!"` or `"Nice!"` depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return `"Nice!"`

## Solution

```javascript
const naughtyOrNice = data => {
  const valuesArray = Object.values(data)
    .map(month => Object.values(month))
    .flat()

  const niceCount = valuesArray.filter(value => value === 'Nice').length

  return niceCount >= valuesArray.length - niceCount ? 'Nice!' : 'Naughty!'
}
```
