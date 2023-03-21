<h1>Card game <sup><sup>6 Kyu</sup></sup></h1>

<sup>
  <a href="https://www.codewars.com/kata/5a3141fe55519e04d90009d8">
    <strong>LINK TO THE KATA</strong>
  </a> - <code>ALGORITHMS</code>  <code>GAMES</code> <code>STRINGS</code>
</sup>

## Description

Lеt's create function to play cards. You receive 3 arguments: `card1` and `card2` are cards from a single deck; `trump` is the main suit, which beats all others.

You have a preloaded `deck` (in case you need it):

```
deck = ["joker","2♣","3♣","4♣","5♣","6♣","7♣","8♣","9♣","10♣","J♣","Q♣","K♣","A♣",
                "2♦","3♦","4♦","5♦","6♦","7♦","8♦","9♦","10♦","J♦","Q♦","K♦","A♦",
                "2♥","3♥","4♥","5♥","6♥","7♥","8♥","9♥","10♥","J♥","Q♥","K♥","A♥",
                "2♠","3♠","4♠","5♠","6♠","7♠","8♠","9♠","10♠","J♠","Q♠","K♠","A♠"]
```

**Game rules**

- If both cards have the same suit, the higher one wins
- If both cards have trump, the higher one wins
- If the cards have different suits and no one has trump, return `"Let us play again."`
- If one card has trump, but not the other, the one with the trump wins
- If there is a winner, return `"The first/second card won."`
- If the two cards are the same, return `"Someone cheats."`
- The joker always wins

**Examples**

```
"3♣", "Q♣", "♦"  -->  "The second card won."
"5♥", "A♣", "♦"  -->  "Let us play again."
"8♠", "8♠", "♣"  -->  "Someone cheats."
"2♦", "A♠", "♦"  -->  "The first card won."
"joker", "joker", "♦"  -->  "Someone cheats."
```

## Solution

```javascript
const values = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
}

const card1WinMessage = 'The first card won.'
const card2WinMessage = 'The second card won.'

const getSuitCard = string => string.slice(-1)
const getValueCard = string => values[string.slice(0, -1)]

const cardGame = (card1, card2, trump) => {
  if (card1 === card2) return 'Someone cheats.'

  if (card1 === 'joker') return card1WinMessage
  if (card2 === 'joker') return card2WinMessage

  const suitCard1 = getSuitCard(card1)
  const suitCard2 = getSuitCard(card2)

  if (suitCard1 === suitCard2) {
    return getValueCard(card1) > getValueCard(card2)
      ? card1WinMessage
      : card2WinMessage
  }

  if (suitCard1 === trump) return card1WinMessage
  if (suitCard2 === trump) return card2WinMessage

  return 'Let us play again.'
}
```
