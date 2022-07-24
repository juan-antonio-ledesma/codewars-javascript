# [Mexican Wave - 6 kyu](https://www.codewars.com/kata/58f5c63f1e26ecda7e000029)

```javascript
const wave = str => {
  const result = []

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i]

    if (currentLetter === ' ') {
      continue
    } else {
      result.push(
        `${str.slice(0, i)}${currentLetter.toUpperCase()}${str.slice(i + 1)}`,
      )
    }
  }

  return result
}
```
