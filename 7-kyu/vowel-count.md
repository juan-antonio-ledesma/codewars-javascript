# [Vowel Count](https://www.codewars.com/kata/54ff3102c1bad923760001f3) · 7 kyu

```javascript
const onlyVowelsRegex = new RegExp(/[^aeiou]+/, 'gi')

const getCount = string => string.replace(onlyVowelsRegex, '').length
```
