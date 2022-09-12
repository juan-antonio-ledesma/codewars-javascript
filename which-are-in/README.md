# [Which are in? - 6 kyu](https://www.codewars.com/kata/550554fd08b86f84fe000a58)

```javascript
const inArray = (array1, array2) => {
  const array2JoinedByHyphen = array2.join('-')

  return array1.filter(word => array2JoinedByHyphen.includes(word)).sort()
}
```
