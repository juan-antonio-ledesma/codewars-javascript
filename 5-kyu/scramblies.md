<h1>Scramblies <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/55c04b4cc56a697bb0000048">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>PERFORMANCE</code> <code>ALGORITHMS</code>
</sup>

## Description

Complete the function `scramble(str1, str2)` that returns true if a portion of `str1` characters can be rearranged to match `str2`, otherwise returns false.

**Notes:**

- Only lower case letters will be used (a-z). No punctuation or digits will be included.
- Performance needs to be considered.

**Examples**

```javascript
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
```

## Solution

```javascript
const scramble = (str1, str2) => {
  if (str1.length < str2.length) return false

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i]
    const timesLetterRepeatedStr1 = str1.split(letter).length - 1
    const timesLetterRepeatedStr2 = str2.split(letter).length - 1

    if (timesLetterRepeatedStr1 < timesLetterRepeatedStr2) return false
  }

  return true
}
```
