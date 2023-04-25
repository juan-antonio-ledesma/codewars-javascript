<h1>Extract the domain name from a URL <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/514a024011ea4fb54200004b">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>PARSING</code> <code>REGULAR EXPRESSIONS</code>
</sup>

## Description

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

```
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
```

## Solution

```javascript
const www = 'www.'
const slashes = '//'

const getDomain = (url, str) => {
  const startDomain = url.indexOf(str) + str.length
  url = url.substring(startDomain)
  return url.split('.')[0]
}

const domainName = url => {
  if (url.includes(www)) return getDomain(url, www)

  if (url.includes(slashes)) return getDomain(url, slashes)

  return url.split('.')[0]
}
```
