function copyClipBoard(IdCopy){
  var copyText = document.getElementById(`${IdCopy}`); 
  copyText.select();
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

