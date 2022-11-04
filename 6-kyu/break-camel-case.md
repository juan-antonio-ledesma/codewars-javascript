# [Break camelCase](https://www.codewars.com/kata/5208f99aee097e6552000148) · 6 kyu

```javascript
const isCapitalLetter = letter => letter === letter.toUpperCase()

const solution = string => {
  if (string === '') return ''

  let result = ''

  for (let i = 0; i < string.length; i++) {
    const currentLetter = string[i]

    result += isCapitalLetter(currentLetter)
      ? ' ' + currentLetter
      : currentLetter
  }

  return result
}
```
