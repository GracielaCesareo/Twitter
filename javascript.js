var cajaTexto = document.getElementById('cajaTexto')
cajaTexto.addEventListener("keyup",contadorCaracteres);

function contadorCaracteres() {
  var texto = document.getElementById('cajaTexto');
  var numero = document.getElementById('numero')
  var longitudMaxima = 141;

  if (texto.value.length >= longitudMaxima) {
    alert('Llegaste al límite de caracteres');
  }
  else {
    numero.innerHTML = texto.value.length;
  }
}

var boton = document.getElementById('enviar');
boton.addEventListener("click",mostrarTweets);

function mostrarTweets() {
  var texto = document.getElementById('cajaTexto').value;
  var autor = document.getElementById('autor').value;
  var seccion = document.getElementById('contenedor');
  var tweets = document.createElement("section");
  tweets.innerHTML = texto + "<br>" + "<strong>Por</strong> " + autor;
  seccion.appendChild(tweets);
}
