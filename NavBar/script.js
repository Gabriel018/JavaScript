const  nav_togglete = document.querySelector(".nav-toggle ")
const links = document.querySelector(".links")

nav_togglete.addEventListener("click", function(){
    links.classList.toggle("show-links")
})