<h1>Counting Duplicates <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

**Example**

"abcde" -> 0 `# no characters repeats more than once`<br>
"aabbcde" -> 2 `# 'a' and 'b'`<br>
"aabBcde" -> 2 `# 'a' occurs twice and 'b' twice ('b' and 'B')`<br>
"indivisibility" -> 1 `# 'i' occurs six times`<br>
"Indivisibilities" -> 2 `# 'i' occurs seven times and 's' occurs twice`<br>
"aA11" -> 2 `# 'a' and '1'`<br>
"ABBA" -> 2 `# 'A' and 'B' each occur twice`<br>

## Solution

```javascript
const duplicateCount = text => {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length
}
```
