<h1>By the Power Set of Castle Grayskull <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/53d3173cf4eb7605c10001a8">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>MATHEMATICS</code> <code>ALGORITHMS</code>
</sup>

## Description

Write a function that returns all of the sublists of a list/array.

Example:

```
power([1,2,3]);=>[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

For more details regarding this, see the [power set](https://en.wikipedia.org/wiki/Power_set) entry in wikipedia.

## Solution

```javascript
const power = array => {
  let results = [[]]
  for (let i = 0; i < array.length; i++) {
    let len = results.length
    for (let j = 0; j < len; j++) {
      results.push([...results[j], array[i]])
    }
  }
  return results
}
```
