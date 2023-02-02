# [Convert A Hex String To RGB](https://www.codewars.com/kata/5282b48bb70058e4c4000fa7) · 5 kyu

```javascript
const hexStringToRGB = hex => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16),
})
```
