<h1>Convert A Hex String To RGB <sup><sup>5 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5282b48bb70058e4c4000fa7">
    <strong>LINK TO KATA</strong>
  </a> - <code>PARSING</code> <code>STRINGS</code> <code>ALGORITHMS</code>
</sup>

## Description

When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

- Accepts a case-insensitive hexadecimal color string as its parameter (ex. `"#FF9933"` or `"#ff9933"`)
- Returns a Map<String, int> with the structure `{r: 255, g: 153, b: 51}` where _r_, _g_, and _b_ range from 0 through 255

**Note**: your implementation does not need to support the shorthand form of hexadecimal notation (ie `"#FFF"`)

**Example**

```
"#FF9933" --> {r: 255, g: 153, b: 51}
```

## Solution

```javascript
const hexStringToRGB = hex => ({
  r: parseInt(hex.slice(1, 3), 16),
  g: parseInt(hex.slice(3, 5), 16),
  b: parseInt(hex.slice(5, 7), 16),
})
```
