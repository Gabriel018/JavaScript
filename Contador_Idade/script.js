function verificar(){
   var data = new Date()
   var atual_ano = data.getFullYear()
   var fano = document.getElementById('ano')
   var res = document.getElementById('res')
   if( fano.value.length  == 0 || fano.value > atual_ano ){
    alert('Algo deu errado')
   }

   else{
       alert('ok')
   }
    
}

