//close links

const NavTogglete = document.querySelector('.nav-toggle')
const linkContainer = document.querySelector(".links-container")
const links = document.querySelector('.links')


NavTogglete.addEventListener("click", function(){
 linkContainer.classList.toggle("show-links")   
})