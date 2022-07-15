const cores  = ["red","blue","grey",'pink']

const btn = document.getElementById('btn')

const cor = document.querySelector('.color')


btn.addEventListener('click',function(){
  const randomNumber = getColor();
  document.body.style.backgroundColor = cores[randomNumber]
  cor.textContent = cores[randomNumber]
});

function getColor (){
    return Math.floor(Math.random()* cores.length)
}