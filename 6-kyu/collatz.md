<h1>Collatz <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5286b2e162056fd0cb000c20">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>NUMBER THEORY</code> <code>ALGORITHMS</code>
</sup>

## Description

**Preface**

A collatz sequence, starting with a positive integern, is found by repeatedly applying the following function to n until _n_ == 1 :

$$
f(n) =
\begin{cases}
      n/2 & \text{if } n \text{ is even} \\
      3n+1 & \text{if } n \text{ is odd} \\
\end{cases}
$$

---

A more detailed description of the collatz conjecture may be found on [Wikipedia](https://en.wikipedia.org/wiki/Collatz_conjecture).

**The Problem**

Create a function `collatz` that returns a collatz sequence string starting with the positive integer argument passed into the function, in the following form:

<p><code>"X<sub>0</sub>->X<sub>1</sub>->...->X<sub>N</sub>"</code></p>

Where X<sub>i</sub> is each iteration of the sequence and N is the length of the sequence.

**Sample Input**

```
Input: 4
Output: "4->2->1"

Input: 3
Output: "3->10->5->16->8->4->2->1"
```

Don't worry about invalid input. Arguments passed into the function are guaranteed to be valid integers >= 1.

## Solution

```javascript
const collatz = n => {
  const sequence = [n]

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2
    } else {
      n = n * 3 + 1
    }
    sequence.push(n)
  }

  return sequence.join('->')
}
```
