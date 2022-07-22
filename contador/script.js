let contador = 0

let  btns = document.querySelectorAll('.btn')
let valor = document.querySelector('#valor')


btns.forEach( function(btn){
    btn.addEventListener("click", function(e){
      const botoes = e.currentTarget.classlist
      if(botoes.contains("subtrair")){
        alert('opa')
      }
      valor.textContent = contador
    })
})