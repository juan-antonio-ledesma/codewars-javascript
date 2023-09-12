<h1>Replace With Alphabet Position <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/546f922b54af40e1e90001da">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

`"a" = 1`, `"b" = 2`, etc.

**Example**

```javascript
alphabetPosition("The sunset sets at twelve o' clock.")
```

Should return `"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"` ( as a string )

## Solution

```javascript
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const alphabetPosition = text => {
  const lowercaseText = text.toLowerCase()
  let result = ''

  for (let i = 0; i < lowercaseText.length; i++) {
    const currentCharacter = lowercaseText[i]

    if (ALPHABET.includes(currentCharacter)) {
      const position = ALPHABET.indexOf(currentCharacter) + 1
      result += position + ' '
    }
  }

  return result.trim()
}
```
