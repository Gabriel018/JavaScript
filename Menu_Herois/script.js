
const Herois = [{
    id: 1,
    nome: "Gult",
    classe: "Guerreiro",
    img: "img/guerreiro.jpg"

},
{
    id: 2,
    nome: "Mago_da_escuridao" ,
    classe: "Mago",
    img: "img/mago.jpg"

},
{
    id: 1,
    nome: "Vult",
    classe: "Arqueiro",
    img: "img/arqueiro.jpg"

}
]

const Heroi_Section = document.querySelectorAll(".Heroi-Container")
const Btn = document.querySelectorAll(".btn")

window.addEventListener("DOMContentLoaded", function(){
    let DisplayMenu = Herois.map(function(item){
    console.log(item)
return item;
    })
})

