# [Array.diff - 6 kyu](https://www.codewars.com/kata/523f5d21c841566fde000009)

```javascript
const arrayDiff = (a, b) => {
  for (let i = 0; i < b.length; i++) {
    a = a.filter(number => b[i] !== number)
  }

  return a
}
```
