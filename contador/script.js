let contador = 0

let  btns = document.querySelectorAll('.btn')
let valor = document.querySelector('#valor')


btns.forEach( function(btn){
    btn.addEventListener("click", function(e){
      const botoes = e.currentTarget.classList
      if(botoes.contains("subtrair")){
        contador--
        
      }
      valor.textContent = contador
    })
})