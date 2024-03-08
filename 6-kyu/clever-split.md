<h1>Clever split <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5992e11d6ca73b38d50000f0">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>REGULAR EXPRESSIONS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

You have a string. The string consists of words. Before words can be an exclamation mark `!`. Also some words are marked as one set with square brackets `[]`. You task is to split the string into separate words and sets.<br>
The set can't be contained in another set.

Input:<br>
String with words (separated by spaces), `!` and `[]`.

Output:<br>
Array with separated words and sets.

Examples:

```
('Buy a !car [!red green !white] [cheap or !new]')  =>  ['Buy', 'a', '!car', '[!red green !white]', '[cheap or !new]']
('!Learning !javascript is [a joy]')                =>  ['!Learning', '!javascript', 'is', '[a joy]']
('[Cats and dogs] are !beautiful and [cute]')       =>  ['[Cats and dogs]', 'are', '!beautiful', 'and', '[cute]']
```

## Solution

```javascript
const cleverSplit = s => s.match(/\[![^\]]*\]|\[[^\]]*\]|\S+/g)
```
