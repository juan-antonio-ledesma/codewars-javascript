# [Unique In Order](https://www.codewars.com/kata/54e6533c92449cc251001667) · 6 kyu

```javascript
const uniqueInOrder = iterable => {
  const result = []

  for (let i = 0; i < iterable.length; i++) {
    const currentCharacter = iterable[i]
    const previousCharacter = iterable[i - 1]

    if (currentCharacter !== previousCharacter) result.push(currentCharacter)
  }

  return result
}
```
