<h1>Rot13 <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/530e15517bc88ac656000716">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>CIPHERS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

## Solution

```javascript
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const ALPHABET_LENGTH = ALPHABET.length
const POSITIONS_TO_ADD = 13

const rot13 = message => {
  let result = ''

  for (let i = 0; i < message.length; i++) {
    const currentCharacter = message[i]
    const currentCharacterToUppercase = currentCharacter.toUpperCase()
    const currentPositionInAlphabet = ALPHABET.indexOf(
      currentCharacterToUppercase,
    )

    const sumOfPositions = currentPositionInAlphabet + POSITIONS_TO_ADD
    const newPositionInAlphabet =
      sumOfPositions >= ALPHABET_LENGTH
        ? sumOfPositions - ALPHABET_LENGTH
        : sumOfPositions

    const newCharacter =
      currentCharacter === currentCharacter.toUpperCase()
        ? ALPHABET[newPositionInAlphabet]
        : ALPHABET[newPositionInAlphabet].toLowerCase()

    result += currentPositionInAlphabet === -1 ? currentCharacter : newCharacter
  }

  return result
}
```
