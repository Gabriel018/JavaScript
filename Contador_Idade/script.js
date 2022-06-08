function verificar(){
   var data = new Date()
   var atual_ano = data.getFullYear()
   var fano = document.getElementById('ano')
   var res = document.getElementById('res')
   var fsexo = document.getElementsByName('sex')
   
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
  
    var idade = atual_ano - Number(fano.value)
    res.innerHTML = ( `Seu genero e ${genero} e sua idade e: ${idade} anos`);

}