window.addEventListener('load',function(){
    new Glider(document.querySelector(".Carrusel"),{
        slidesToShow: 1,
  dots: '.carruselIndicadores',
  draggable: true,
  arrows: {
    prev: '.btnAnterior',
    next: '.btnSiguiente'
  }
    });
})

const menu = document.querySelector(".menu");
abrir = document.querySelector(".openMenu");
cerrar = document.querySelector(".closeMenu");

function toggleMenu(){
menu.classList.toggle("menuAbierto")
}
abrir.addEventListener("click", toggleMenu)
cerrar.addEventListener("click", toggleMenu)