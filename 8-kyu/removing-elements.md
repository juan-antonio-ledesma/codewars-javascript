<h1>Removing Elements <sup><sup>8 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5769b3802ae6f8e4890009d2">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>LISTS</code> <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

**Example:**

`["Keep", "Remove", "Keep", "Remove", "Keep", ...]` --> `["Keep", "Keep", "Keep", ...]`

None of the arrays will be empty, so you don't have to worry about that!

## Solution

```javascript
const removeEveryOther = arr => {
  return arr.filter((element, index) => index % 2 === 0)
}
```
