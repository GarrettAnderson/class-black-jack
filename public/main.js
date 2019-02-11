let deck = []
const suits = [ 'hearts', 'diamonds', 'clubs', 'spades' ]
const faces = [
  { value: 2, face: '2' },
  { value: 3, face: '3' },
  { value: 4, face: '4' },
  { value: 5, face: '5' },
  { value: 6, face: '6' },
  { value: 7, face: '7' },
  { value: 8, face: '8' },
  { value: 9, face: '9' },
  { value: 10, face: '10' },
  { value: 10, face: 'jack' },
  { value: 10, face: 'queen' },
  { value: 10, face: 'king' },
  { value: 11, face: 'ace' }
]

const player = {
  hand: [],
  wins: 0,
  losses: 0
}

const dealer = {
  hand: []
}

const createDeck = () => {
  // start with an empty deck array
  deck = []
  suits.forEach((suit) => {
    faces.forEach((face) => {
      const card = {
        value: face.value,
        suit: suit,
        rank: face.face,
        imageURL: face.face + '_of_' + suit
      }
      deck.push(card)
    })
  })
  console.log(deck)
}

const shuffleDeck = () => {
  // for i from 53 - 1 down to 1 do:
  // j = random integer (where 0 <= j <= i)
  // swap items[i] with items[j]
  for (let i = deck.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))

    let cardAtPositionI = deck[i]
    let cardAtPositionJ = deck[j]

    // swap items[i] with items[j]
    deck[j] = cardAtPositionI
    deck[i] = cardAtPositionJ
  }
  console.log(deck)
}

const dealCardToPlayer = () => {
  // .shift to remove the first card from deck
  // .push to add card to player hand
  const nextCard = deck.shift()
  player.hand.push(nextCard)
}

const dealCardToDealer = () => {
  const nextCard = deck.shift()
  dealer.hand.push(nextCard)
}

const displayPlayerHand = () => {
  // remove all cards in existing ul
  const parent = document.querySelector('.player-hand')
  while (parent.firstChild) {
    parent.firstChild.remove()
  }
  // LESS EFFICIENT than while loop document.querySelector('.player-hand').textContent = ''

  const lis = player.hand.map((card) => {
    const img = document.createElement('img')
    img.src = '/images/' + card.imageUrl + '.svg'
    const li = document.createElement('li')
    li.appendChild(img)
    return li
  })
  lis.forEach((li) => {
    document.querySelector('.player-hand').appendChild(li)
  })
}

const displayPlayerTotal = () => {
  // add value of cards in player's hand
  // reduce
  // const playerScore = player.hand.reduce((total, card) => {
  //   total += card.value
  //   return total
  // }, 0)

  // using a forEach loop
  let playerScore = 0
  player.hand.forEach((card) => {
    playerScore += card.value
  })

  // standard for loop
  // for (let i = 0; i < player.hand.length; i++) {
  //   const card = player.hand[i]
  //   playerScore += card.value
  // }

  // display total sum of player score
  document.querySelector('.player-score').textContent = playerScore
}

const displayDealerHand = () => {
  // LESS EFFICIENT than while loop document.querySelector('.player-hand').textContent = ''

  const img = document.createElement('img')
  img.src = '/images/' + card.imageUrl + '.svg'
  const li = document.createElement('li')
  li.appendChild(img)
  return li

  lis.forEach((li) => {
    document.querySelector('.dealer-hand').appendChild(li)
  })
}

const startGame = () => {
  // deal 2 cards to player - be sure to update the deck
  dealCardToPlayer()
  dealCardToPlayer()
  console.log(player)
  // show player their cards
  // display cards as li's
  // deal 2 cards to dealer
  // show only 1 dealer card
}

const main = () => {
  createDeck()
  shuffleDeck()
}

document.addEventListener('DOMContentLoaded', main)
