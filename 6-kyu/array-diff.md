<h1>Array.diff <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/523f5d21c841566fde000009">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code> <code>ALGORITHMS</code>
</sup>

## Description

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list `a`, which are present in list `b` keeping their order.

```javascript
arrayDiff([1, 2], [1]) == [2]
```

If a value is present in `b`, all of its occurrences must be removed from the other:

```javascript
arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3]
```

## Solution

```javascript
const arrayDiff = (values, valuesToRemove) => {
  return values.filter(value => !valuesToRemove.includes(value))
}
```
