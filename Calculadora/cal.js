function calcular() {   
    const operacao = prompt("Digite a operação desejada: \n 1 - soma \n 2 - subtração \n 3 - multiplicação \n 4 - divisão"); 
    

    let n1 = Number(prompt("Digite o primeiro número"));
    let n2 = Number(prompt("Digite o segundo número"));
    let result;



    function soma() {  
        result = n1 + n2;
        alert('Resultado e: ' + result );
    }

    function subtracao() {  
        result = n1 - n2;
        alert('Resultado e: ' + result );
    }

    function multiplicacao() {  
        result = n1 * n2;
        alert('Resultado e: ' + result );
    }
    

    function divisao() {  
        result = n1 / n2;
        alert('Resultado e: ' + result );
    }

    if (operacao == 1) { 
        soma();
    }
    else if (operacao == 2) {    
        subtracao();
    }
    else if (operacao == 3) {
        multiplicacao();
    }
    else if (operacao == 4) {        
        divisao();
    }
}
calcular();