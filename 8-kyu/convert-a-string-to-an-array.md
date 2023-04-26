<h1>Convert a string to an array <sup><sup>8 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/57e76bc428d6fbc2d500036d">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Write a function to split a string and convert it into an array of words.

**Examples (Input ==> Output):**

```
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
```

## Solution

```javascript
const stringToArray = string => string.split(' ')
```
