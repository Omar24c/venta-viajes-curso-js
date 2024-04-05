import { barcelona, roma, paris, londres } from './ciudades.js'

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// AGREGAR UN EVENTO CLICK A CADA ENLACE
enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(){
        // REMOVER LA CLASE 'ACTIVE' DE TODOS LOS ENLACES
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
 
      // AGREGAR LA CLASE 'ACTIVE' AL ENLACE ACTUAL / this = enlace
      this.classList.add('active')

      // OBTENER EL CONTENIDO CORRESPONDIENTE SEGÚN EL ENLACE / textContext sale del barcelona
      let contenido = obtenerContenido(this.textContent)

      
      // MOSTRAR EL CONTENIDO EN EL DOM
      tituloElemento.innerHTML = contenido.titulo
      subTituloElemento.innerHTML = contenido.subtitulo
      parrafoElemento.innerHTML = contenido.parrafo
      precioElemento.innerHTML = contenido.precio

    });
});

// FUNCIÓN PARA TRAER LA INFORMACIÓN CORRECTA DESDE CIUDADES.JS
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}