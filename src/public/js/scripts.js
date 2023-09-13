function copyClipBoard(IdCopy){
  var copyText = document.getElementById(`${IdCopy}`); 
  copyText.select(`${IdCopy}`);
  copyText.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(copyText.value);
  
  Toastify({
    text: `Ruta ${IdCopy} copiada`,
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
