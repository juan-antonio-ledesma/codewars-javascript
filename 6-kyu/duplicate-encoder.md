<h1>Duplicate Encoder <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/54b42f9314d9229fd6000d9c">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>ARRAYS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

The goal of this exercise is to convert a string to a new string where each character in the new string is `"("` if that character appears only once in the original string, or `")"` if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

**Examples**

```
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
```

**Notes**

Assertion messages may be unclear about what they display in some languages. If you read `"...It Should encode XXX"`, the `"XXX"` is the expected result, not the input!

## Solution

```javascript
const isUniqueCharacter = (word, character) => {
  return word.indexOf(character) === word.lastIndexOf(character)
}

const duplicateEncode = word => {
  const lowerCaseWord = word.toLowerCase()

  return lowerCaseWord
    .split('')
    .map(character => {
      return isUniqueCharacter(lowerCaseWord, character) ? '(' : ')'
    })
    .join('')
}
```
