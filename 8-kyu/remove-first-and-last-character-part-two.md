<h1>Remove First and Last Character Part Two <sup><sup>8 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/570597e258b58f6edc00230d">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS</code> <code>ARRAYS</code> <code>STRINGS</code>
</sup>

## Description

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

**Examples**

```
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
```

## Solution

```javascript
const array = arr => {
  const strArr = arr.split(',')

  if (strArr.length <= 2) return null

  return strArr.slice(1, strArr.length - 1).join(' ')
}
```
