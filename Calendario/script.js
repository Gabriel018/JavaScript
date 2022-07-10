var calen = document.getElementById('calen')
var Hora = document.getElementById('Hora')
var Mostrar_name = document.getElementById('Mostrar_Nome')
var nomedigitado = document.getElementById('nome')
var Mes = document.getElementById('mes')
var Dia = document.getElementById('dia')

var msg = document.getElementById('msg')


var Meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho",
"Agosto","Setembro","Outubro","Novembro","Dezembro"]

var agora = new Date()
var DiaSem = Meses[agora.getMonth()]

var Dia = agora.getDate()

var MostrarDia = agora.getDate()

var HoraAtual = agora.getHours()
var MinAtual = agora.getMinutes()

function NomeUser(){


  Hora.innerHTML =  ` Agora e: ${HoraAtual} : ${MinAtual} `

  if( HoraAtual >= 18) {
    msg.innerHTML = 'Boa Noite'
    Mes.innerHTML = `Estamos em, ${DiaSem}, dia ${Dia}`
    Mostrar_name.innerHTML = `Bem vindo ${nomedigitado.value} ` 

    }
  if(HoraAtual <= 18) {
    msg.innerHTML = 'Boa Tarde'
    Mes.innerHTML = `Estamos em, ${DiaSem}, dia ${Dia}`
    Mostrar_name.innerHTML = `Bem vindo ${nomedigitado.value} ` 

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
        calen.innerHTML = " Hoje e Sabado"
        break      
    
}

}


