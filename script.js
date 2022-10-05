const menuHamburger = document.querySelector(".menubg")
const navLinks = document.querySelector(".navlinks")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})
