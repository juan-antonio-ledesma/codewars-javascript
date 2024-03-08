<h1>Maximum subarray sum <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code> <code>LISTS</code> <code>DYNAMIC PROGRAMMING</code> <code>FUNDAMENTALS</code> <code>PERFORMANCE</code>
</sup>

## Description

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

```javascript
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
```

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

## Solution

```javascript
const maxSequence = arr => {
  let maxSoFar = 0
  let maxEndingHere = 0

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i]

    if (maxEndingHere < 0) maxEndingHere = 0

    if (maxSoFar < maxEndingHere) maxSoFar = maxEndingHere
  }

  return maxSoFar
}
```
