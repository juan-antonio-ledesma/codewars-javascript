<h1>List Filtering <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/53dbd5315a3c69eed20002dd">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>LISTS</code> <code>FILTERING</code> <code>DATA STRUCTURES</code> <code>FUNDAMENTALS</code>
</sup>

## Description

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

**Example**

```javascript
filter_list([1, 2, 'a', 'b']) == [1, 2]
filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]
```

## Solutions

```javascript
const filter_list = l => l.filter(item => typeof item === 'number')
```

```javascript
const filter_list = l => l.filter(item => Number.isInteger(item))
```
