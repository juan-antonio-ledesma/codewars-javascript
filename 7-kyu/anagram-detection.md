<h1>Anagram Detection <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/529eef7a9194e0cbc1000255">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

An **anagram** is the result of rearranging the letters of a word to produce a new word (see [wikipedia](https://en.wikipedia.org/wiki/Anagram)).

**Note:** anagrams are case insensitive

Complete the function to return `true` if the two arguments given are anagrams of each other; return false otherwise.

**Examples**

- `"foefet"` is an anagram of `"toffee"`

- `"Buckethead"` is an anagram of `"DeathCubeK"`

## Solution

```javascript
const sortAlphabetically = word => {
  return word.toLowerCase().split('').sort().join('')
}

const isAnagram = (test, original) => {
  return sortAlphabetically(test) === sortAlphabetically(original)
}
```
