<h1>Convert PascalCase string into snake_case <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/529b418d533b76924600085d">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>ALGORITHMS</code>
</sup>

## Description

Complete the function/method so that it takes a `PascalCase` string and returns the string in `snake_case` notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

**Examples**

```
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
```

## Solution

```javascript
const toUnderscore = string => {
  return string
    .toString()
    .replace(/(.)([A-Z])/g, '$1_$2')
    .toLowerCase()
}
```
