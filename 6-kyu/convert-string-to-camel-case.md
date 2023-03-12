<h1>Convert string to camel case <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/517abf86da9663f1d2000003">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>REGULAR EXPRESSIONS</code> <code>ALGORITHMS</code> <code>STRINGS</code>
</sup>

## Description

Complete the method/function so that it converts dash/underscore delimited words into [camel casing](https://en.wikipedia.org/wiki/Camel_case). The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

**Examples**

`"the-stealth-warrior"` gets converted to `"theStealthWarrior"`

`"The_Stealth_Warrior"` gets converted to `"TheStealthWarrior"`

`"The_Stealth-Warrior"` gets converted to `"TheStealthWarrior"`

## Solution

```javascript
const getSplitSentence = (sentence, divider) => sentence.split(divider)

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const toCamelCase = string => {
  const splitSentence = string.includes('-')
    ? getSplitSentence(string, '-')
    : getSplitSentence(string, '_')

  return splitSentence
    .map((word, index) => {
      if (index === 0) return word
      return capitalizeFirstLetter(word)
    })
    .join('')
}
```
