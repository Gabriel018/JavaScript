
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

const Heroi_Section = document.querySelector(".Heroi-Container")
const Btn = document.querySelector(".btn")

window.addEventListener("DOMContentLoaded", function(){
    let DisplayMenu = Herois.map(function(item){
     
    return `<div class="Heroi-Container">
    <div class="Heroi">
        <img src=${item.img} alt="">
        <p>Nome: ${item.nome}</h2>
        <P>Classe:${item.classe}</P>
        <p>idade:23</p>
    </div>`


    })
    Heroi_Section.innerHTML = DisplayMenu
})

