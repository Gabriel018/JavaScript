function verificar(){
   var data = new Date()
   var atual_ano = data.getFullYear()
   var fano = document.getElementById('ano')
   var res = document.getElementById('res')
   var fsexo = document.getElementsByName('sex')
   var idade = atual_ano - Number(fano.value)
   var genero = ''

   if( fano.value.length  == 0 || Number(fano.value) > atual_ano){
    alert('Algo deu errado')
   }
   
   if( fsexo[0]){
      genero = 'Homem' 
   }
   else{

    (fsexo[1]) 
      genero = 'Feminino'
   }
   if ( idade <= 15) 
    res.innerHTML = ( `Voce e uma criança ${genero} e sua idade e: ${idade} anos`);
    if ( idade >= 15) 
    res.innerHTML = ( `Voce e uma jovem ${genero} e sua idade e: ${idade} anos`);
    if ( idade >= 60) 
    res.innerHTML = ( `Voce e uma idoso ${genero} e sua idade e: ${idade} anos`);
}