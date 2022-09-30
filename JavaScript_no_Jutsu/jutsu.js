

const btn = document.querySelectorAll(".card")

const juju = document.querySelector(".jutsu")
const modal = document.getElementById("mymodal")

const clicados = []
console.log(clicados)
function mostrar(clicked){
   var audio = new Audio('img/itachi_Jutsu.mp3')
   
   console.log(clicked)
   clicados.push(clicked) 
   if(clicados.indexOf('Dog','Galo')){
    audio.play()  
    modal.style.display="block"
   }
   console.log(clicados)
   
    }

 