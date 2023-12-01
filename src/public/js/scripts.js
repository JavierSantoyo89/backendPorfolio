
//* -------------------- 
let host = "https://backendportfolio-r0uf.onrender.com/"
function copyClipBoard(apiTitle, proyect, endpointName){
  console.log(host+proyect+endpointName);
  navigator.clipboard.writeText(host+proyect+endpointName);
  
  Toastify({
    text: `Ruta ${apiTitle} copiada`,
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
}

function Scroll_Top(){
  const Btn_ScrollTop = document.getElementById("btn_ScrollTop")
  Btn_ScrollTop.addEventListener("click", ()=>{
    window.scrollTo(0,0)
  })
  window.onscroll = () =>{
      if (window.scrollY < 213){
        console.log( window.scrollY);
        Btn_ScrollTop.classList.remove("btnScrollTop-on")
      }else{
        Btn_ScrollTop.classList.add("btnScrollTop-on")  
      }
    }

}


// Hace que los detalles se puedan cerrar al abrir otro
const detalles = document.querySelectorAll('details');
detalles.forEach((detalle) => {
  detalle.addEventListener('click', () => {
    detalles.forEach((d) => {
      if (d !== detalle) {
        d.removeAttribute('open');
      }
    });
  });
});

  //  <!--Necesario para el efecto scroll top-->
      const Btn_ScrollTop = document.getElementById("btn_ScrollTop")
Btn_ScrollTop.addEventListener("click", ()=>{
  window.scrollTo({
    top:0,
    behavior: "smooth"
  })
})
window.onscroll = () =>{
    if (window.scrollY < 213){
      Btn_ScrollTop.classList.remove("btnScrollTop-on")
    }else{
      Btn_ScrollTop.classList.add("btnScrollTop-on")
    }
  }
