
window.addEventListener('load', ()=> {
  let lon
  let lat

  let temperaturaValor = document.getElementById('temperatura-valor')  
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
  
  let ubicacion = document.getElementById('ubicacion')  
  let iconoAnimado = document.getElementById('icono-animado') 

  let vientoVelocidad = document.getElementById('viento-velocidad') 


  if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition( posicion => {
         lon = posicion.coords.longitude
         lat = posicion.coords.latitude
           
         const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&lat=${lat}&lon=${lon}&appid=3459b0a41b001caebb6d3a4910025e62`

         //ubicación por ciudad
        //const url = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&lang=es&units=metric&appid=3459b0a41b001caebb6d3a4910025e62`
         fetch(url)
          .then( response => { return response.json()})
          .then( data => {
              
              
              let temp = Math.round(data.main.temp)
              
              temperaturaValor.textContent = `${temp} ° C`

              //console.log(data.weather[0].description)
              let desc = data.weather[0].description
              temperaturaDescripcion.textContent = desc.toUpperCase()
              ubicacion.textContent = data.name
              
              vientoVelocidad.textContent = `${data.wind.speed} m/s`
              
              //para iconos estáticos
              //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
              //icono.src = urlIcon
              //console.log(data.weather[0].icon)

              //para iconos dinámicos
              
              switch (data.weather[0].main) {
                  case 'Thunderstorm':
                    iconoAnimado.src='animated/thunder.svg'
                    break;
                  case 'Drizzle':
                    iconoAnimado.src='animated/rainy-2.svg'
                    break;
                  case 'Rain':
                    iconoAnimado.src='animated/rainy-7.svg'
                    break;
                  case 'Snow':
                    iconoAnimado.src='animated/snowy-6.svg'
                    break;                        
                  case 'Clear':
                      iconoAnimado.src='animated/day.svg'
                    break;
                  case 'Atmosphere':
                    iconoAnimado.src='animated/weather.svg'
                      break;  
                  case 'Clouds':
                      iconoAnimado.src='animated/cloudy-day-1.svg'
                      break;  
                  default:
                    iconoAnimado.src='animated/cloudy-day-1.svg'
                }

          })
          .catch( error => {
              console.log(error)
          })
     })
        
  }
})
function CopyPassword() {
  document.getElementById("alertas").innerHTML = "";
  var copyText = document.getElementById("result");
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.value);
  let alertasDiv = document.getElementById("alertas");
  let alerta = document.createElement("DIV");
  alerta.innerHTML = '<strong>Copiado!</strong>'
  + '</button>';
  alerta.classList.add('alert');
  alerta.classList.add('alert-success');
  alerta.classList.add('alert-dismissible');
  alerta.classList.add('fade');
  alerta.classList.add('show');
  alerta.setAttribute("role", "alert");
  alertasDiv.appendChild(alerta);
  $(alerta).toggleClass('in out'); 
  alertasDiv.style.display = 'block';
  setTimeout(function(){
    alertasDiv.style.display = 'none';
  },1000);
}
  
(function (self, $, undefined) {
  Index.Star = function () {
    
    //#region modal 
      // me traigo el modal 
    var modal = document.getElementById("myModal2");

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
    //#endregion modal
  
    $( "#btnGenerarContra" ).click(function() {
      // aca traer el valor del select 
      var cantidad = $("#cantidad").val();
      var resultado = GeneratePass(cantidad);
      $('#result').show();
      $('#result').val(resultado);
      $('#btnCopy').show();
    });

  

  
  function GeneratePass(length) {
    length = length -2;
    var result= '';
    var parcial ='';
    var asci = '!"#$%&/()=?-.,_:;{}';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    var asciLength = asci.length;

    for ( var i = 0; i < length; i++ ) 
    {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    for (var t=0;t<2;t++)
    {
    parcial += asci.charAt(Math.floor(Math.random() * asciLength));
    }
    return result = result + parcial;
  }

}

}(window.Index = window.Index || {}, jQuery));


jQuery(function (){
    Index.Star();
})