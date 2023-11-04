<h1>Remove anchor from URL <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/51f2b4448cadf20ed0000386">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>REGULAR EXPRESSIONS</code> <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Complete the function/method so that it returns the url with anything after the anchor (`#`) removed.

**Examples**

```
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
```

## Solution

```javascript
const removeUrlAnchor = url => url.split('#')[0]
```
