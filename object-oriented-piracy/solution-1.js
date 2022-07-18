function Ship(draft, crew) {
  const CREW_MEMBER_WEIGHT = 1.5
  const MINIMUM_BOOTY = 20

  this.draft = draft
  this.crew = crew
  this.crewWeight = this.crew * CREW_MEMBER_WEIGHT

  this.isWorthIt = () => this.draft - this.crewWeight > MINIMUM_BOOTY
}
