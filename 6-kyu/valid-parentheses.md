<h1>Valid Parentheses <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/52774a314c2333f0a7000688">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code>
</sup>

## Description

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return `true` if the string is valid, and `false` if it's invalid.

**Examples**

```
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```

**Constraints**

`0 <= input.length <= 100`

## Solution

```javascript
const validParentheses = parens => {
  let counter = 0
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') counter++
    if (parens[i] === ')') counter--
    if (counter < 0) return false
  }

  return counter === 0
}
```
