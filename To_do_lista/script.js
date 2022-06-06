const  user = document.getElementById('user');
const  AddButton = document.getElementById('enviar');
const  lista = document.getElementById('lista');
const   item =  document.getElementsByTagName('li');



function Inputlength(){
    return user.value.length;
}

function Create_List(){
  const  li = document.createElement('li');
  
  li.appendChild(document.createTextNode(user.value));
  lista.appendChild(li);
  input.value = '';

  const  btn = document.createElement('button');
  btn.appendChild(document.createTextNode('X'));
  li.appendChild(btn);
  btn.addEventListener('click', DeleteList);
   
  function DeleteList(){
    this.parentElement.remove();
    }
}

AddButton.addEventListener('click',addList);
input.addEventListener('keypress',addList);

function addList(event){
    if(Inputlength() > 0 && event.keyCode === 13){
        Create_List();
    }
}