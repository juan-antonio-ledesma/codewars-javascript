<h1>Count the smiley faces! <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/583203e6eb35d7980400002a">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>REGULAR EXPRESSIONS</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Given an array (arr) as an argument complete the function `countSmileys` that should return the total number of smiling faces.

Rules for a smiling face:

- Each smiley face must contain a valid pair of eyes. Eyes can be marked as `:` or `;`
- A smiley face can have a nose but it does not have to. Valid characters for a nose are `-` or `~`
- Every smiling face must have a smiling mouth that should be marked with either `)` or `D`

No additional characters are allowed except for those mentioned.

**Valid smiley face examples:** `:) :D ;-D :~)`<br>
**Invalid smiley faces:** `;( :> :} :]`

**Example**

```
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
```

**Note**

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

## Solution

```javascript
const validEyes = [':', ';']
const validNoses = ['-', '~']
const validMouths = [')', 'D']

const countSmileys = faces => {
  if (faces.length === 0) return 0

  const smilingFaces = faces.filter(face => {
    const currentFace = face.split('')

    if (currentFace.length > 3) return false

    const currentEyes = currentFace[0]
    const currentNose = currentFace.length === 3 ? currentFace[1] : null
    const currentMouth = currentFace[currentFace.length - 1]

    return currentNose === null
      ? validEyes.includes(currentEyes) && validMouths.includes(currentMouth)
      : validEyes.includes(currentEyes) &&
          validNoses.includes(currentNose) &&
          validMouths.includes(currentMouth)
  })

  return smilingFaces.length
}
```
