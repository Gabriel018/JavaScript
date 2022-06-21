var calen = document.getElementById('calen')

var agora = new Date()
var DiaSem = agora.getDay()


switch(DiaSem){

    case 0:
        console.log("Domingo")
        break
    case 1:
        calen.innerHTML = "Hoje e Segunda feira"
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sabado")
        break      

}


