<h1>Which are in? <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/550554fd08b86f84fe000a58">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ARRAYS</code> <code>LISTS</code> <code>STRINGS</code> <code>REFACTORING</code>
</sup>

## Description

Given two arrays of strings `a1` and `a2` return a sorted array `r` in lexicographical order of the strings of `a1` which are substrings of strings of `a2`.

**Example 1:**

`a1 = ["arp", "live", "strong"]`

`a2 = ["lively", "alive", "harp", "sharp", "armstrong"]`

returns `["arp", "live", "strong"]`

**Example 2:**

`a1 = ["tarp", "mice", "bull"]`

`a2 = ["lively", "alive", "harp", "sharp", "armstrong"]`

returns `[]`

**Notes:**

- Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
- In Shell bash `a1` and `a2` are strings. The return is a string where words are separated by commas.
- Beware: In some languages `r` must be without duplicates.

## Solution

```javascript
const inArray = (array1, array2) => {
  const array2JoinedBySpace = array2.join(' ')

  return array1.filter(word => array2JoinedBySpace.includes(word)).sort()
}
```
