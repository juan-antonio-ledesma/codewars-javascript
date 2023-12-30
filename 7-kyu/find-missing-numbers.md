<h1>Find missing numbers <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

```
[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
```

Your task is to return an array of those missing numbers:

```
[-1,0,2,3,4]
```

## Solution

```javascript
const findMissingNumbers = nums => {
  const minNumber = Math.min(...nums)
  const maxNumber = Math.max(...nums)

  const missingNumbers = []

  for (let i = minNumber + 1; i < maxNumber; i++) {
    if (nums.indexOf(i) === -1) missingNumbers.push(i)
  }

  return missingNumbers
}
```
