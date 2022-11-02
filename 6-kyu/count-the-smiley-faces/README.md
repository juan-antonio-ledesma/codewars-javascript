# [Count the smiley faces!](https://www.codewars.com/kata/583203e6eb35d7980400002a) · 6 kyu

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
