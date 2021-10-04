// gsap.registerPlugin(ScrollTrigger);

// var tl = gsap.timeline({
//     scrollTrigger:{
//        trigger:'#slider'
//     }
// })

// tl.to('#mundo',{
//     duration: 2,
//     y:-500,
//     opacity:0  
// });

// tl.to('#monitor',{
//     start:300,
//     opacity:1,
//     y:-300,
//     duration:2
// })

// tl.to('#monitor',{
//     opacity:0
// })
// tl.to('#telefono',{
//     opacity:1,
//     y:0,
//     duration:2
// })

// var slider = 0;

// window.onscroll = function() {
    
//     var y = window.scrollY;   

//     if(y >= 102 && slider == 0 )
//     {
//         desparece()        
        
//     }
//     if(y >= 102 && y<164 && slider == 1)
//     {
//         document.getElementById("monitor").style = "block"
               
//         window.scroll(0,0)
//     }
//     if(y >= 102 && slider == 2){
//         despareceMonitor()
//     }

//   };

//  function desparece(){
//     ImagenPrincpal = document.getElementById("ImagenPrincipal");
//     ImagenPrincpal.classList.add("slide-out-right");
    
//     TituloPrincpal = document.getElementById("tituloMundo");
//     TituloPrincpal.classList.add("fade-out");

//      tituloNosotros = document.getElementById("tituloNos");
//      tituloNosotros.className = "fade-out";
     
//       staffing = document.getElementById("tituloStaffing");
//       staffing.classList.add("fade-out");
//       slider = 1
      
//   } 

//   function despareceMonitor(){
//     frasemoni = document.getElementById("ciber");
//     frasemoni.classList.remove("slide-in-left");
//     frasemoni.classList.add("fade-out");
// }


document.getElementById("btn").addEventListener('click',()=> {
    
    document.getElementById("texto").style.display ="block"
})
