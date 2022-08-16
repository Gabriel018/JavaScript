

const  Menu = [
{
    id: 1,
    titulo: "cookie",
    categoria:"biscoito",
    preco: 16.99,
    img:"./img/cookie.jpg",
    Descricao:"Kra e so um cookie",
},

{
    id: 2,
    titulo: "bolo",
    categoria:"bolo",
    preco: 36.99,
    img:"./img/bolo.jpg",
    Descricao:"somente um bolo",
},

{
    id: 3,
    titulo: "torta",
    categoria:"bolo",
    preco: 36.99,
    img:"./img/torta.jpg",
    Descricao:"somente uma torta",
},




]


const sectionCenter = document.querySelector(".section-center")


window.addEventListener("DOMContentLoaded", function(){
    let DisplayMenu = Menu.map(function(item){
       console.log(item)

return item;
    })
   console.log(DisplayMenu)
});