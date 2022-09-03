
const nav = document.getElementById("navbar")

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset
    const navHeight = nav.getBoundingClientRect().height

if(scrollHeight > navHeight){
    nav.classList.add("fixed-nav")
}

else{
    nav.classList.remove("fixed-nav")
}
     

})

