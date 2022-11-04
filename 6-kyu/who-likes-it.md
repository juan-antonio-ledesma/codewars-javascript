# [Who likes it?](https://www.codewars.com/kata/5266876b8f4bf2da9b000362) · 6 kyu

```javascript
const likes = names => {
  const numberOfNames = names.length

  if (numberOfNames === 0) return 'no one likes this'
  if (numberOfNames === 1) return `${names[0]} likes this`
  if (numberOfNames === 2) return `${names[0]} and ${names[1]} like this`
  if (numberOfNames === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  if (numberOfNames > 3)
    return `${names[0]}, ${names[1]} and ${numberOfNames - 2} others like this`
}
```
