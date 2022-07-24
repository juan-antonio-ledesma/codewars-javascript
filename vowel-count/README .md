# [Vowel Count - 7 kyu](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

```javascript
const onlyVowelsRegex = new RegExp(/[^aeiou]+/, 'gi')

const getCount = string => string.replace(onlyVowelsRegex, '').length
```
