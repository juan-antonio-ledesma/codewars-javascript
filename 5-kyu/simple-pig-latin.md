<h1>Simple Pig Latin <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/520b9d2ad5c005041100000f">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>REGULAR EXPRESSIONS</code> <code>ALGORITHMS</code>
</sup>

## Description

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

**Examples**

```javascript
pigIt('Pig latin is cool') // igPay atinlay siay oolcay
pigIt('Hello world !') // elloHay orldway !
```

## Solution

```javascript
const rexSpecialCharacters = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/

const pigIt = str => {
  const splitPhrase = str.split(' ')
  const result = []

  for (let i = 0; i < splitPhrase.length; i++) {
    const word = splitPhrase[i]
    const firstLetterOfTheWord = word.charAt(0)
    const wordWithoutFirstLetter = word.slice(1)
    const isSpecialCharacter = Boolean(
      firstLetterOfTheWord.match(rexSpecialCharacters),
    )
    const newWord = isSpecialCharacter
      ? firstLetterOfTheWord
      : `${wordWithoutFirstLetter}${firstLetterOfTheWord}ay`

    result.push(newWord)
  }

  return result.join(' ')
}
```
