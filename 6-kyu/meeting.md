<h1>Meeting <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/59df2f8f08c6cec835000012">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>FUNDAMENTALS
</code>
</sup>

## Description

John has invited some friends. His list is:

```
str = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
```

Could you make a program that

- makes this string uppercase
- gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function `meeting(str)` will be:

```
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
```

It can happen that in two distinct families with the same family name two people have the same first name too.

## Solution

```javascript
const meeting = str => {
  return str
    .toUpperCase()
    .split(';')
    .map(name => {
      let [firstName, lastName] = name.split(':')
      return `(${lastName}, ${firstName})`
    })
    .sort()
    .join('')
}
```
