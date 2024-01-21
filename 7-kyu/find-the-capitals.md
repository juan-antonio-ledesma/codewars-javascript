<h1>Find the capitals <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/539ee3b6757843632d00026b">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

**Example (Input --> Output)**

```
"CodEWaRs" --> [0,3,4,6]
```

## Solution

```javascript
const capitals = word => {
  const result = []

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) result.push(i)
  }

  return result
}
```
