const menuHamburger = document.querySelector(".menubg")
const navLinks = document.querySelector(".navlinks")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})
// const chargement = document.querySelector(".chargement");


// setTimeout(function () {
//     $(".chargement");
// }, 3000);

// if (chargement === )
// chargement.display = none;
// else

// $(document).ready(function () {
//     $(chargement).fadeOut(5000, function () {
//         $(nosProduits).show(1000);
//     });
// })


setTimeout(function () {
    $('.chargement').fadeOut();
}, 4000);
