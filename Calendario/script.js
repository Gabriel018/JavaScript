var calen = document.getElementById('calen')
var Hora = document.getElementById('Hora')

var nome = document.getElementById('nome')

var msg = document.getElementById('msg')

var agora = new Date()
var DiaSem = agora.getDay()

var HoraAtual = agora.getHours()
var MinAtual = agora.getMinutes()

Hora.innerHTML =   ` Agora e: ${HoraAtual} : ${MinAtual} `

if( HoraAtual >= 18) {
    msg.innerHTML = 'Boa Noite'
}


switch(DiaSem){

    case 0:
        calen.innerHTML = 'Hoje e Domingo'
        break
    case 1:
        calen.innerHTML = "Hoje e Segunda feira"
        break
    case 2:
        calen.innerHTML = "Hoje e  Terça feira"
        break
    case 3:
        calen.innerHTML = "Hoje e quarta feira"
        break
    case 4:
        calen.innerHTML = "Hoje e Quinta feira"
        break
    case 5:
        calen.innerHTML = "Hoje e Sexta feira"
        break
    case 6:
        calen.innerHTML = "Sabado"
        break      
    
}


