# [Object Oriented Piracy](https://www.codewars.com/kata/54fe05c4762e2e3047000add) · 8 kyu

```javascript
function Ship(draft, crew) {
  const CREW_MEMBER_WEIGHT = 1.5
  const MINIMUM_BOOTY = 20

  this.draft = draft
  this.crew = crew
  this.crewWeight = this.crew * CREW_MEMBER_WEIGHT

  this.isWorthIt = () => this.draft - this.crewWeight > MINIMUM_BOOTY
}
```

```javascript
function Ship(draft, crew) {
  this.draft = draft
  this.crew = crew
}

Ship.prototype.isWorthIt = function () {
  const CREW_MEMBER_WEIGHT = 1.5
  const MINIMUM_BOOTY = 20

  return this.draft - this.crew * CREW_MEMBER_WEIGHT > MINIMUM_BOOTY
}
```
