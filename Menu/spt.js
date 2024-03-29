

const  Menu = [
{
    id: 1,
    titulo: "cookie-br",
    categoria:"biscoito",
    preco: 16.99,
    img:"./img/cookie.jpg",
    Descricao:"Kra e so um cookie"
},

{
    id: 2,
    titulo: "bolo-nozes",
    categoria:"bolo",
    preco: 36.99,
    img:"./img/bolo.jpg",
    Descricao:"somente um bolo"
},

{
    id: 3,
    titulo: "torta-limao",
    categoria:"bolo",
    preco: 36.99,
    img:"./img/torta.jpg",
    Descricao:"somente uma torta"
},


]

const sectionCenter = document.querySelector(".section-center")
const filterBtn = document.querySelectorAll(".filter-btn")


//Load Items
window.addEventListener("DOMContentLoaded", function(){
    DisplayMenuItems(Menu);
});
//Filter item
filterBtn.forEach(function(btn){
 btn.addEventListener("click",function(e){
    const categoria = e.currentTarget.dataset.id
    const MenuCategory  = Menu.filter(function(MenuItens){
        if(MenuItens.categoria === categoria)
           return MenuItens    
    })
    if(categoria === "Tudo"){
        DisplayMenuItems(Menu)
    }
    else
    DisplayMenuItems(MenuCategory)
 })

})
    
function DisplayMenuItems(MenuItens){
    let DisplayMenu = MenuItens.map(function(item){
        console.log(item)


        return `<div class="menu-item">
        <img src=${item.img} class="photo">
        <div class="item-info">
        <header>
            <h4>${item.titulo}</h3>
            <h4 class=${item.preco}>R$16</h3>
        </header>
        <p class="item-text">${item.Descricao}</p>
        </div>`;

    });
console.log(DisplayMenu)
DisplayMenu = DisplayMenu.join("")
sectionCenter.innerHTML = DisplayMenu    


    

};