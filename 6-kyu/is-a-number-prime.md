# [Is a number prime?](https://www.codewars.com/kata/5262119038c0985a5b00029f) · 6 kyu

```javascript
const isPrime = number => {
  if (number <= 1) return false

  const squareRoot = Math.sqrt(number)

  for (let i = 2; i <= squareRoot; i++) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}
```
