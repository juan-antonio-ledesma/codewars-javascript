<h1>L2: Triple X <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/568dc69683322417eb00002c">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>REGULAR EXPRESSIONS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

```
tripleX("abraxxxas") → true
tripleX("xoxotrololololololoxxx") → false
tripleX("softX kitty, warm kitty, xxxxx") → true
tripleX("softx kitty, warm kitty, xxxxx") → false
```

Note :

- capital X's do not count as an occurrence of "x".
- if there are no "x"'s then return false

## Solution

```javascript
const tripleX = str => {
  const xIndex = str.indexOf('x')

  return str.slice(xIndex, xIndex + 3) === 'xxx'
}
```
