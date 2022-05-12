
const cardslist = [
{
    name: "aviao1",
    img : "img/aviao1.jpg", 
},
{
    name: "aviao2",
    img : "img/aviao2.jpg", 
},
{
    name: "aviao3",
    img : "img/aviao3.jpg", 
},
{
    name: "aviao4",
    img : "img/aviao4.jpg", 
},
{
    name: "aviao5",
    img : "img/aviao5.jpg", 
},

{
    name: "aviao1",
    img : "img/aviao1.jpg", 
},
{
    name: "aviao2",
    img : "img/aviao2.jpg", 
},
{
    name: "aviao3",
    img : "img/aviao3.jpg", 
},
{
    name: "aviao4",
    img : "img/aviao4.jpg", 
},
{
    name: "aviao5",
    img : "img/aviao5.jpg", 
},
]

const gridDisplay = document.querySelector("#grid");
let cardchoice = []
let cardchoiceId = []
let cardget = []


 cardslist.sort(() => 0.5 - Math.random());

function createGrid() {
     for (let i = 0; i < cardslist.length; i++) {
         const cards = document.createElement("img");
         cards.setAttribute("src", "img/blank.png");
         cards.setAttribute("data-id", i);
         gridDisplay.appendChild(cards);
         cards.addEventListener("click", flipCard);
         console.log(cards,i);
     }

    }
    createGrid();

 function flipCard() { 
     const cards = this.getAttribute('data-id');
     cardchoice.push(cardslist[cards].name)
     cardchoiceId.push(cards)
     console.log(cardchoice)
     console.log(cardchoiceId)
     this.setAttribute("src", cardslist[cards].img);
     if (cardchoice.length === 2) {
         setTimeout(checkCards, 1000);
     }
     
 }   

 function checkCards() {
     const cards = document.querySelectorAll("img");
     console.log("checando")
     if ( cardchoice[0] == cardchoice[1]){
            console.log("acertou")
            cardget.push(cardchoice)    
     }
       else {
        cards[cardchoiceId[0]].setAttribute("src", "img/blank.png")
        cards[cardchoiceId[1]].setAttribute("src", "img/blank.png")
      
 }
       cardchoice = []
       cardchoiceId = []

  if (cardget.length == cardslist.length/2) {
      document.getElementById("result").innerHTML = "Parabens voce ganhou!!!!";
  }     
}