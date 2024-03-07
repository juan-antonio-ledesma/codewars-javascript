<h1>Most frequently used words in a text <sup><sup>4 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/51e056fe544cf36c410000fb">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FILTERING</code> <code>ALGORITHMS</code> <code>REGULAR EXPRESSIONS</code>
</sup>

## Description

Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

**Assumptions:**

- A word is a string of letters (A to Z) optionally containing one or more apostrophes (`'`) in ASCII.
- Apostrophes can appear at the start, middle or end of a word (`'abc`, `abc'`, `'abc'`, `ab'c` are all valid)
- Any other characters (e.g. `#`, `\`, `/` , `.` ...) are not part of a word and should be treated as whitespace.
- Matches should be case-insensitive, and the words in the result should be lowercased.
- Ties may be broken arbitrarily.
- If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

**Examples:**

```
"In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income."

--> ["a", "of", "on"]


"e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

--> ["e", "ddd", "aa"]


"  //wont won't won't"

--> ["won't", "wont"]
```

**Bonus points (not really, but just for fun):**

1. Avoid creating an array whose memory footprint is roughly as big as the input text.
2. Avoid sorting the entire array of unique words.

## Solution

```javascript
const topThreeWords = text => {
  const words = text.toLowerCase().match(/\b[\'a-z]+\'?(?:[a-z]+\'?)*\b/g)

  if (!words) return []

  const wordCounts = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1
    return acc
  }, {})

  const sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1])

  const topThree = sortedWords.slice(0, 3).map(item => item[0])

  return topThree
}
```
