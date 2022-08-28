
const Herois = [{
    id: 1,
    nome: "Gult",
    Categoria: "Guerreiro",
    img: "img/guerreiro.jpg"

},
{
    id: 2,
    nome: "Mago_da_escuridao" ,
    Categoria: "Mago",
    img: "img/mago.jpg"

},
{
    id: 1,
    nome: "Vult",
    Categoria: "Arqueiro",
    img: "img/arqueiro.jpg"

}
]

const Heroi_Section = document.querySelector(".Heroi-Container")
const Btn = document.querySelectorAll(".btn")

window.addEventListener("DOMContentLoaded", function(){
   DisplayMenuItems(Herois)   

    })
Btn.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const Categoria = e.currentTarget.dataset.id
        const MenuCategoria = Herois.filter(function(MenuItens){
        if(MenuItens.Categoria === Categoria){
            return MenuItens 
        }
            
        })
        if(Categoria === "Todos"){
        DisplayMenuItems(Herois)
        }
        else{
        DisplayMenuItems(MenuCategoria)  
        }
       
     console.log(Categoria)
    })
})

function DisplayMenuItems(MenuItens){
    let DisplayMenu = MenuItens.map(function(item){
     
        return `<div class="Heroi-Container">
        <div class="Heroi">
            <img src=${item.img} alt="">
            <p>Nome: ${item.nome}</h2>
            <P>Categoria:${item.Categoria}</P>
            <p>idade:23</p>
        </div>`
    
})    
    Heroi_Section.innerHTML = DisplayMenu
}


