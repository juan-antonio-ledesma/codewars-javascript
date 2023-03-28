<h1>Complementary DNA <sup><sup>7 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/554e4a2f232cdd87d9000038">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>STRINGS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: [http://en.wikipedia.org/wiki/DNA](https://en.wikipedia.org/wiki/DNA)

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: [http://rosalind.info/problems/list-view/](https://rosalind.info/problems/list-view/) (source)

Example: (**input --> output**)

```
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
```

## Solution

```javascript
const pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

const DNAStrand = dna => {
  return dna
    .split('')
    .map(symbol => pairs[symbol])
    .join('')
}
```
