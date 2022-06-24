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
        calen.innerHTML = "Hoje e Segunda terça"
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


