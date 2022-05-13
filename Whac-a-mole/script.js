const quadrados = document.querySelectorAll('.quadrado')
const duck =  document.querySelectorAll('.duck')
const time = document.querySelectorAll('#time')
const score = document.querySelectorAll('#score')


let result = 0
let Hereposition
let tempoAtual =10
let timer = null


function randomQuadrado(){
    quadrados.forEach( quadrado => {
        quadrado.classList.remove('duck')
   
})

let randomQuadrado = quadrados[Math.floor(Math.random()* 9)]
randomQuadrado.classList.add('duck')

Hereposition = randomQuadrado.id


}


quadrados.forEach( quadrado => {
    quadrado.addEventListener('click', () => {
    if(quadrado.id == Hereposition){
        result++
        score[0].innerHTML = result
        console.log(result)
        Hereposition = null
    }
})
})
function moveDuck(){
    let timer = null
    timer = setInterval(randomQuadrado,1000)

}
moveDuck()


function contador(){
    tempoAtual-- 
    time[0].innerHTML = tempoAtual
    if(tempoAtual == 0){
        clearInterval(timer)
        clearInterval(ContadorId)
        clearInterval(tempoAtual)
        alert('Fim de Jogo')
    }
}

let ContadorId = setInterval(contador, 1000)
    