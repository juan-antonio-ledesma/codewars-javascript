<h1>Valid Braces <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5277c8a221e209d3f6000b56">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code>
</sup>

## Description

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return `true` if the string is valid, and `false` if it's invalid.

This Kata is similar to the [Valid Parentheses](https://www.codewars.com/kata/valid-parentheses) Kata, but introduces new characters: brackets `[]`, and curly braces `{}`. Thanks to `@arnedag` for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: `()[]{}`.

**What is considered Valid?**

A string of braces is considered valid if all braces are matched with the correct brace.

**Examples**

```
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
```

## Solution

```javascript
const pairs = {
  '(': ')',
  '{': '}',
  '[': ']',
}

const validBraces = braces => {
  const newBraces = braces
    .replaceAll('{}', '')
    .replaceAll('()', '')
    .replaceAll('[]', '')

  const bracesLength = newBraces.length

  if (bracesLength % 2 !== 0) return false

  const halfBracesLength = bracesLength / 2

  const halfBraces = newBraces.slice(0, halfBracesLength)
  const halfBracesReversed = newBraces
    .split('')
    .reverse()
    .slice(0, halfBracesLength)
    .join('')

  for (let i = 0; i < halfBracesLength; i++) {
    if (pairs[halfBraces[i]] !== halfBracesReversed[i]) return false
  }

  return true
}
```
