class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0; 
  }

  shuffleCards() {
    if (!this.cards)
    {
      return undefined
    }
     
    for (let index = this.cards.length - 1 ; index > 0 ; index -= 1)
    {
       const shuffled = Math.floor(Math.random() * (index + 1))
       const temp = this.cards[index]
       this.cards[index] = this.cards[shuffled];
       this.cards[shuffled] = temp;
       
    }
     return this.cards
  }

  checkIfPair(card1, card2) {
    
    this.pairsClicked += 1;
    if (card1 === card2)
    {
      
      this.pairsGuessed += 1;

      return true
    }
    else 
    {
      return false
    }

    
  }

  checkIfFinished() {
    if(this.pairsGuessed === 0 || this.pairsGuessed !== this.cards.length /2)
    {
      return false
    }
   
    if(this.pairsGuessed === this.cards.length / 2)
   {
    return true
   }
  
}
}
