import { barcelona, roma, paris, londres } from './ciudades.js';

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')



enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        });
        
        
        this.classList.add('active')
        
        let contenido = obtenercontenido(this.textContent)
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
        
    })

})


function obtenercontenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }

    return contenido[enlace];

}