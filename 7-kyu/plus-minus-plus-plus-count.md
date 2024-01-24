<h1>Plus - minus - plus - plus - ... - Count <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code>
</sup>

## Description

Count how often sign changes in array.

**result**

number from `0` to ... . Empty array returns `0`

**example**

```javascript
const arr = [1, -3, -4, 0, 5]

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/

catchSignChange(arr) == 2
```

## Solution

```javascript
const catchSignChange = arr => {
  let result = 0
  let lastSign = undefined

  for (let i = 0; i < arr.length; i++) {
    const currentSign = arr[i] >= 0 ? 'positive' : 'negative'

    if (lastSign !== undefined && currentSign !== lastSign) result++

    lastSign = currentSign
  }

  return result
}
```
