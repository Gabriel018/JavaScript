const  user = document.getElementById('user');
const  AddButton = document.getElementById('enviar');
const  ul = document.getElementById('ul');
const  item =  document.getElementsByTagName('li');



function Inputlength(){
    return user.value.length;
}

function Create_List(){
    let li = document.createElement('li');
    
    li.appendChild(document.createTextNode(user.value));
    ul.appendChild(li);
    user.value = '';

    let  btn = document.createElement('button');
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn);
    btn.addEventListener('click', DeleteList);
    
    function DeleteList(){
        li.classList.add('delete');
        console.log('click');
        }
}

AddButton.addEventListener('click',addListClick);

function addListClick(){
    if(Inputlength() > 0){
        Create_List();
        
    }

}