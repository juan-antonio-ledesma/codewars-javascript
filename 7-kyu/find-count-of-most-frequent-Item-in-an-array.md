<h1>Find Count of Most Frequent Item in an Array <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/56582133c932d8239900002e">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>DATA STRUCTURES</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return `0`

**Example**

```javascript
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5
```

The most frequent number in the array is `-1` and it occurs `5` times.

## Solution

```javascript
const mostFrequentItemCount = collection => {
  if (collection.length === 0) return 0

  const frequency = {}

  for (let number of collection) {
    frequency[number] = frequency[number] ? frequency[number] + 1 : 1
  }

  return Math.max(...Object.values(frequency))
}
```
