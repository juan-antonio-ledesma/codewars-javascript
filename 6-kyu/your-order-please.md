# [Your order, please](https://www.codewars.com/kata/55c45be3b2079eccff00010f) · 6 kyu

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
