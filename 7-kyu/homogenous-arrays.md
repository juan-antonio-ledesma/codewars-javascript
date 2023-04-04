<h1>Homogenous arrays <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/57ef016a7b45ef647a00002d">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>FUNDAMENTALS</code> <code>FUNCTIONAL PROGRAMMING</code>
</sup>

## Description

**Challenge:**

Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

**Example:**

Given `[[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]`, your function should return `[[1, 5, 4], ['b']]`.

**Addendum:**

Please keep in mind that for this kata, we assume that empty arrays are not homogenous.

The resultant arrays should be in the order they were originally in and should not have its values changed.

No implicit type casting is allowed. A subarray `[1, '2']` would be considered illegal and should be filtered out.

## Solution

```javascript
const filterHomogenous = arrays => {
  const result = []

  for (var i = 0; i < arrays.length; i++) {
    const typeOfFirstElement = typeof arrays[i][0]
    const allElementsSameTypeOf = arrays[i].every(
      element => typeof element === typeOfFirstElement,
    )
    if (allElementsSameTypeOf && arrays[i].length > 0) result.push(arrays[i])
  }

  return result
}
```
