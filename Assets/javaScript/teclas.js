const tecla = document.getElementById ('key');

function colores (color) {
    tecla.style.backgroundColor = color;
}

function crear (color) {
    let contenedor = document.getElementById("contenedor");
    const nuevo = document.createElement ("div")
    nuevo.style.backgroundColor = color;
    nuevo.style.width = '200px';
    nuevo.style.height = '200px';
    nuevo.style.border = 'solid 2px black';
    contenedor.appendChild(nuevo);
}

function borrar () {
    let contenedor = document.getElementById("contenedor");
    let divisiones = contenedor.querySelectorAll ("div");
    if (divisiones.length >= 2) {
        contenedor.removeChild(divisiones[divisiones.length - 1]);
      }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    colores ('#fea1f2');
    } else if (event.key === 's') {
    colores ('#ffb94c');
    } else if (event.key === 'd') {
    colores ('#34f4d1'); 
    } else if (event.key === 'q') {
    crear ('#ca61fb');
    } else if (event.key === 'w') {
        crear ('#bebdbf');
    } else if (event.key === 'e') {
        crear ('#a47559');
    } else if (event.key === 'Backspace') {
        borrar ();
    }
    });