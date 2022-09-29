

const btn = document.querySelectorAll(".card")

const juju = document.querySelector(".jutsu")
const modal = document.getElementById("mymodal")

function mostrar(clicked){
   var audio = new Audio('img/itachi_Jutsu.mp3')
   
   console.log(clicked)
   if(clicked === "Dog" && clicked === "Galo" ){
    audio.play()  
    modal.style.display="block"
   }
   
    }

   
