(function (self, $, undefined) {
  Index.Star = function () {
    // me traigo el modal 
var modal = document.getElementById("myModal");

// me traigo el btn que abre el modal 
var btn = document.getElementById("btnTecnologias");

// me traigo el x
var span = document.getElementsByClassName("close")[0];

// abrir modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// cerrar el modal desde la x
span.onclick = function() {
  modal.style.display = "none";
}

// cerrar el modal tocando fuera de el 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// cerrar el modal con esc 
window.addEventListener("keyup", function(event){
  var codigo = event.keyCode || event.which;
  if (codigo == 27){
    
      modal.style.display = "none";
    
  }
}, false);

}     
}(window.Index = window.Index || {}, jQuery));


jQuery(function (){
    Index.Star();
})