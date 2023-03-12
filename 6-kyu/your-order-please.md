<h1>Your order, please <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/55c45be3b2079eccff00010f">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

**Examples**

```
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
```

## Solution

```javascript
const order = words => {
  const splitWords = words.split(' ')

  const result = []

  splitWords.forEach(word => {
    const orderWord = word.split('').sort().join('')

    result.push([orderWord, word])
  })

  return result
    .sort()
    .map(array => array[1])
    .join(' ')
}
```
