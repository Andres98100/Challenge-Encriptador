// Challenge para encriptar y desencriptar mensjaes

// 1. Crear un diccionario de datos que voy a encriptar
// 2. Crear una funcion que reciba un mensaje y lo encripte
// 3. Crear una funcion que reciba un mensaje encriptado y lo desencripte

let vocalesEncriptadas = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
}

document.querySelector('.boton-encriptar').addEventListener('click', () => {
    mostrarBotonCopiar();
});

document.querySelector('.boton-desencriptar').addEventListener('click', () => {
    mostrarBotonCopiar();
});

let resetearBotonCopiar = () => {
    let botonCopiar = document.querySelector('.btn');
    if (botonCopiar) {
        botonCopiar.innerText = 'Copiar';
        botonCopiar.disabled = false;
    }
}

let asignarElemento = (selector, texto) => {
    let elementoHtml = document.querySelector(selector);

    if (elementoHtml) {
        elementoHtml.innerText = texto;
    } else {
        console.error("Elemento no encontrado con el selector:", selector);
    }
}

let encriptar = (mensaje, selectorResultado) => {
    resetearBotonCopiar();
    let soloLetras = mensaje.replace(/[^a-zA-Z ]/gi, '');
    let mensajeEncriptado = '';
    let minuscula = soloLetras.toLowerCase();
    for (let i = 0; i < minuscula.length; i++) {
        let letra = minuscula[i];
        if (vocalesEncriptadas[letra]) {
            mensajeEncriptado += vocalesEncriptadas[letra];
        } else {
            mensajeEncriptado += letra;
        }
    }
    asignarElemento(selectorResultado, mensajeEncriptado);
    mostrarBotonCopiar();
}

let desencriptarYMostrar = (mensajeEncriptado, selectorResultado) => {
    resetearBotonCopiar();
    let soloLetras = mensajeEncriptado.replace(/[^a-zA-Z ]/gi, '');
    let minuscula = soloLetras.toLowerCase();
    for (let clave in vocalesEncriptadas) {
        let valor = vocalesEncriptadas[clave];
        let regex = new RegExp(valor, 'g');
        minuscula = minuscula.replace(regex, clave);
    }
    asignarElemento(selectorResultado, minuscula);
    mostrarBotonCopiar();
}

let copiarContenido = (selector) => {
    let elemento = document.querySelector(selector);
    if (elemento) {
        let elementoTemporal = document.createElement('input');
        elementoTemporal.value = elemento.innerText;
        document.body.appendChild(elementoTemporal);
        elementoTemporal.select();
        document.execCommand('copy');
        document.body.removeChild(elementoTemporal);
    } else {
        console.error("Elemento no encontrado con el selector:", selector);
    }
}

document.querySelector('.btn-copiar').addEventListener('click', () => {
    copiarContenido('.container-texto');
    asignarElemento('.btn-copiar', 'Copiado!');
});

let mostrarBotonCopiar = () => {
    let boton = document.getElementById('oculto');
    if (boton) {
        boton.style.display = 'block';
    }
}


