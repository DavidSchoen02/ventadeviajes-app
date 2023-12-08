import { barcelona, roma, paris, londres} from './ciudades.js'

// OBTENER LOS ELEMENTOS DEL DOM (DOCUMENT-OBJECT-MODEL)
// ES UNA REPRESENTACION ESTRUCTURADA DE UN DOCUMENTO HTML LA INTERACCIÓN CON EL DOM NOS VA A 
// PERMITIR HACER UNA MODIFICACIÓN DE ESTRUCTURA , CONTENIDO O ESTILO EN LA PAG WEB
// DE FORMA DINAMICA ,EL DOM SE ORGANIZA COMO ARBOL DE NODOS Y CADA NODO ES UN ELEMENTO 
// ESTE ELEMENTO ES UN OBJETO EN JAVASCRIPT QUE TIENE SUS PROPIEDADES Y METODOS CON LAS CUALES 
// PODREMOS INTERACTUAR CON EL Y MODIFICAR LA APLICACIÓN DE FORMA QUE SE VEA MUCHISIMO MAS DINAMICA
// LA BUENA UTILIZACION DEL DOM EN JS NOS VA A PERMITIR HACER MAS DINAMICAS Y ATRACTIVAS.

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precieElemento = document.getElementById('precio')

// Agregamos un Evento CLICK a cada enlace 
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //Remover la clase "active"(verde) de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        //  Agregar la clase "active"(verde) al enlace actual
        this.classList.add('active')

        // Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(this.textContent)

        // MOSTRAR EL CONTENIDO EN EL DOM 
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precieElemento.innerHTML = contenido.precio
    });
});

// Función para trae la información correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}

