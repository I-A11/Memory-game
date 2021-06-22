document.addEventListener("DOMContentLoaded", () => {
  // card options
  const cardArray = [
    {
      name: "burger",
      img: "images/burger.png",
    },
    {
      name: "burger",
      img: "images/burger.png",
    },
    {
      name: "donut",
      img: "images/donut.png",
    },
    {
      name: "donut",
      img: "images/donut.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "pizza",
      img: "images/pizza1.png",
    },
    {
      name: "pizza",
      img: "images/pizza1.png",
    },
    {
      name: "sandwich",
      img: "images/sandwich.png",
    },
    {
      name: "sandwich",
      img: "images/sandwich.png",
    },
    {
      name: "tacos",
      img: "images/tacos.jpg",
    },
    {
      name: "tacos",
      img: "images/tacos.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardWon = [];

  // create game board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/sea.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (
      cardsChosen[0] === cardsChosen[1] &&
      cardsChosenId[0] !== cardsChosenId[1]
    ) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.jpg");
      cards[optionTwoId].setAttribute("src", "images/white.jpg");
      cardWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/sea.jpg");
      cards[optionTwoId].setAttribute("src", "images/sea.jpg");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardWon.length;
    if (cardWon.length === cardArray.length / 2) {
      resultDisplay.textContent = `Congratulation! You found them all!`;
    }
  }

  //flip the card
  function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
