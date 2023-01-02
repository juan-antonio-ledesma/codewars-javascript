# [Zero-plentiful Array](https://www.codewars.com/kata/59e270da7997cba3d3000041) · 6 kyu

```javascript
const zeroPlentiful = array => {
  const zerosGroups =
    array
      .map(number => (number === 0 ? 0 : 1))
      .join('')
      .match(/0+/g) || []

  return zerosGroups.every(group => group.length > 3) ? zerosGroups.length : 0
}
```
