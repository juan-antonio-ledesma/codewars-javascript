# [Get the Middle Character](https://www.codewars.com/kata/56747fd5cb988479af000028) · 7 kyu

```javascript
const getMiddle = string => {
  const stringLength = string.length

  return stringLength % 2 !== 0
    ? string.substring(stringLength / 2, stringLength / 2 + 1)
    : string.substring(stringLength / 2 - 1, stringLength / 2 + 1)
}
```
