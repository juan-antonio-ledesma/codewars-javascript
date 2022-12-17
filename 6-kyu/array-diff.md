# [Array.diff](https://www.codewars.com/kata/523f5d21c841566fde000009) · 6 kyu

```javascript
const arrayDiff = (values, valuesToRemove) => {
  return values.filter(value => !valuesToRemove.includes(value))
}
```
