<h1>Break camelCase <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5208f99aee097e6552000148">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Complete the solution so that the function will break up camel casing, using a space between words.

**Example**

```
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
```

## Solution

```javascript
const isCapitalLetter = character => character !== character.toLowerCase()

const solution = string => {
  let result = ''

  for (let i = 0; i < string.length; i++) {
    const currentCharacter = string[i]

    result += isCapitalLetter(currentCharacter)
      ? ' ' + currentCharacter
      : currentCharacter
  }

  return result
}
```
