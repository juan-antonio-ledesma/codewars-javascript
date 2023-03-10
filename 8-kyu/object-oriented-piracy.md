<h1>Object Oriented Piracy <sup><sup>8 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/54fe05c4762e2e3047000add">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>OBJECT-ORIENTED PROGRAMMING</code> <code>FUNDAMENTALS</code>
</sup>

## Description

Ahoy matey!

You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!

Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?

You begin with writing a generic Ship class / struct:

```javascript
function Ship(draft, crew) {
  this.draft = draft
  this.crew = crew
}
```

Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

- draft - an estimate of the ship's weight based on how low it is in the water
- crew - the count of crew on board

```javascript
var titanic = new Ship(15, 10)
```

**Task**

You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

Each crew member adds `1.5` units to the ship draft. If after removing the weight of the crew, the draft is still more than `20`, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

Add the method

```javascript
isWorthIt
```

to decide if the ship is worthy to loot. For example:

```javascript
titanic.isWorthIt() // return false
```

Good luck and may you find GOOOLD!

## Solutions

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

---

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
