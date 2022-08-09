const ModalBt = document.querySelector(".modal-btn")
const Modal = document.querySelector(".modal-overlay")
const close = document.querySelector(".close-btn")


ModalBt.addEventListener("click", function(){
Modal.classList.add("open-modal")
})

close.addEventListener("click", function(){
Modal.classList.remove("open-modal")  
})