//INFORMACIÓN
let detalleJugadores = [

    { nombre: "Alfredo Ghierra", img: 1, texto: "Descripción" },
    { nombre: "Alfredo Zibechi", img: 2, texto: "Descripción" },
    { nombre: "Andrés Mazali", img: 3, texto: "Descripción" },
    { nombre: "Ángel Romano", img: 4, texto: "Descripción" },
    { nombre: "Antonio Urdinaran", img: 5, texto: "Descripción" },
    { nombre: "Fermín Uriarte", img: 6, texto: "Descripción" },
    { nombre: "Héctor Scarone", img: 7, texto: "Descripción" },
    { nombre: "Humberto Tomasina", img: 8, texto: "Descripción" },
    { nombre: "José Leandro Andrade", img: 9, texto: "Descripción" },
    { nombre: "José Nasazzi", img: 10, texto: "Descripción" },
    { nombre: "José Naya", img: 11, texto: "Descripción" },
    { nombre: "José Vidal", img: 12, texto: "Descripción" },
    { nombre: "Pascual Somma", img: 13, texto: "Descripción" },
    { nombre: "Pedro Arispe", img: 14, texto: "Descripción" },
    { nombre: "Pedro Casella", img: 15, texto: "Descripción" },
    { nombre: "Pedro Cea", img: 16, texto: "Descripción" },
    { nombre: "Pedro Etchegoyen", img: 17, texto: "Descripción" },
    { nombre: "Pedro Petrone", img: 18, texto: "Descripción" },
    { nombre: "Pedro Zingone", img: 19, texto: "Descripción" },
    { nombre: "Santos Urdinaran", img: 20, texto: "Descripción" },
    { nombre: "Zoilo Saldombide", img: 21, texto: "Descripción" },
    { nombre: "Leonidas Chiappara", img: 22, texto: "Descripción" }
];

//GLOBALES
let ruta = window.location.href;
let jugadorId = parseInt(ruta.substring(ruta.indexOf("=") + 1))

console.log(jugadorId);

//ELEMENTOS
let imgPrincipal = document.querySelector("img");
let titulo = document.querySelector("h1");
let texto = document.querySelector("p")

//INIT
document.title = detalleJugadores[jugadorId - 1].nombre;

imgPrincipal.setAttribute("src", `media/figuritas/${detalleJugadores[jugadorId - 1].img}.png`);
titulo.textContent = detalleJugadores[jugadorId - 1].nombre;
texto.textContent = detalleJugadores[jugadorId - 1].texto