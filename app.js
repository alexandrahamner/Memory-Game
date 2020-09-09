document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'black-cat',
            img: 'images/black-cat.png'
        } ,
        {
            name: 'black-cat',
            img: 'images/black-cat.png'
        } ,
        {
            name: 'brown-cat',
            img: 'images/brown-cat.png'
        } ,
        {
            name: 'brown-cat',
            img: 'images/brown-cat.png'
        } ,
        {
            name: 'gray-cat',
            img: 'images/gray-cat.png'
        } ,
        {
            name: 'gray-cat',
            img: 'images/gray-cat.png'
        } ,
        {
            name: 'orange-cat',
            img: 'images/orange-cat.png'
        } ,
        {
            name: 'orange-cat',
            img: 'images/orange-cat.png'
        } ,
        {
            name: 'tortie-cat',
            img: 'images/tortie-cat.png'
        } ,
        {
            name: 'tortie-cat',
            img: 'images/tortie-cat.png'
        } ,
        {
            name: 'white-cat',
            img: 'images/white-cat.png'
        } ,
        {
            name: 'white-cat',
            img: 'images/white-cat.png'
        }

    ]

    cardArray.sort(() => 0.5 - Math.random());

    const memoryGame = document.querySelector(".memory-game");
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

//    This Creates Our Board


     function createBoard () {
         for (var i = 0; i < cardArray.length; i++) {
             var card = document.createElement('img');
             card.setAttribute('src', 'images/blank.png');
             card.setAttribute('data-id', i);
             card.setAttribute('class', 'card-border')
             card.addEventListener('click', flipCard);
             memoryGame.appendChild(card);
         }
     }

    //     This Checks for Matches
    function checkForMatch() {
         var cards = document.querySelectorAll('img');
         const optionOneId = cardsChosenId[0];
         const optionTwoId = cardsChosenId[1];
         if (cardsChosen[0] === cardsChosen[1]) {
             cards[optionOneId].setAttribute('src', 'images/matched-card.png');
             cards[optionOneId].setAttribute('class', 'card-border');
             cards[optionTwoId].setAttribute('src', 'images/matched-card.png');
             cards[optionTwoId].setAttribute('class', 'card-border');
             cardsWon.push(cardsChosen)
         } else {
             cards[optionOneId].setAttribute('src', 'images/blank.png');
             cards[optionTwoId].setAttribute('src', 'images/blank.png');
         }

         cardsChosen = [];
         cardsChosenId = [];
         resultDisplay.textContent = cardsWon.length;
         if (cardsWon === cardsArray.length/2) {
            resultDisplay.textContent = "Congrats! You won!";
         }
    }
    
     // Flip the Card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

     createBoard();



    


})