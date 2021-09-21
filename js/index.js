const menu = document.querySelector(".menu");
abrir = document.querySelector(".openMenu");
cerrar = document.querySelector(".closeMenu");

function toggleMenu(){
menu.classList.toggle("menuAbierto")
}
abrir.addEventListener("click", toggleMenu)
cerrar.addEventListener("click", toggleMenu)