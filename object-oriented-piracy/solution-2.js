function Ship(draft, crew) {
  this.draft = draft
  this.crew = crew
}

Ship.prototype.isWorthIt = function () {
  const CREW_MEMBER_WEIGHT = 1.5
  const MINIMUM_BOOTY = 20

  return this.draft - this.crew * CREW_MEMBER_WEIGHT > MINIMUM_BOOTY
}
