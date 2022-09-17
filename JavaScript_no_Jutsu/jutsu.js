const selos = [{
    id: 1,
    nome: "Porco",
    img : "img/Porco.jpg"

},
{
    id: 2,
    nome: "Galo",
    img : "img/Galo.jpg"

},
{
    id: 3,
    nome: "Rato",
    img : "img/Rato.jpg"

},
{
    id: 4,
    nome: "Cachorro",
    img: "img/Cachorro.jpg"

},
]

const gridcard = document.querySelector(".grid")

window.addEventListener("DOMContentLoaded", function(){
DisplayMenuItems(selos)
})


function DisplayMenuItems(MenuItens){
  let  DisplayMenu = MenuItens.map(function(item){
        console.log(item)
    
    return `<div class="card">
    <img src="${item.img}">
     </div>`

    })
    console.log(DisplayMenu)
    DisplayMenu = DisplayMenu.join("")
    gridcard.innerHTML = DisplayMenu
    
}
