const azul = document.getElementById ('blue');
const rojo = document.getElementById ('red');
const verde = document.getElementById ('green');
const amarillo = document.getElementById ('yellow');


function negro(element) {
    element.style.backgroundColor = "black"
}

azul.addEventListener ("click", function () {
    negro (azul);
})

rojo.addEventListener ("click", function () {
    negro (rojo);
})

verde.addEventListener ("click", function () {
    negro (verde);
})

amarillo.addEventListener ("click", function () {
    negro (amarillo);
})



