
const cardslist = [
{
    name: "img1",
    img : "img/img1.jpg", 
},
{
    name: "img2",
    img : "img/img2.jpg", 
},
{
    name: "img3",
    img : "img/img3.jpg", 
},
{
    name: "img4",
    img : "img/img4.jpg", 
},
{
    name: "img5",
    img : "img/img5.jpg", 
},
{
    name: "img6",
    img : "img/img6.jpg", 
},
{
    name: "img7",
    img : "img/img7.jpg", 
},
{
    name: "img8",
    img : "img/img8.jpg", 
},
{
    name: "img9",
    img : "img/img9.jpg", 
},
{
    name: "img10",
    img : "img/img10.jpg", 
}
]

const gridDisplay = document.querySelector("#grid");
const cardchoice = []


function createGrid() {
     for (let i = 0; i < 10; i++) {
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
     const cardid = this.getAttribute('data-id');
     cardchoice.push(cardslist[cardid].name)
     console.log(cardchoice)
     this.setAttribute("src", cardslist[cardid].img);
     
 }   