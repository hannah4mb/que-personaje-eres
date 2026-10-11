//Personajes 
let puntosCooper=0;
let puntosPeter=0;
let puntosEleven=0;

let preguntaActual =0;
let respuestaSeleccionada= null;

//Preguntas
const preguntas = [
    {
        texto: "Cuando tienes un problema inesperado ¿Que haces primero?",
        opciones: [
            {
                texto:"Primero intento entender que esta pasando antes de poder actuar.",
                personaje:"cooper"
            },
            {
                texto:"Pienso rapidamente como puedo ayudar a los demas.",
                personaje:"peter"
            },
            {
                texto:"Confio en mi instinto y actuo aunque tenga miedo",
                personaje:"eleven"
            }

        ]
    },
    //Pregunta 2
    {
        texto: "¿Que valoras mas cuando pasas por momentos dificiles?",
        opciones: [
            {
                texto:"La lealtad de las personas que quiero",
                personaje:"eleven"
            },
            {
                texto:"Encontrar una solucion logiuca al problema.",
                personaje:"cooper"
            },
            {
                texto:"Hacer lo correcto aunque sea complicado.",
                personaje:"peter"
            }
        ]

    },
    //Pregunta 3
    {
         texto: "Si tuvieras que tomar una decision importante ,¿Que harias?",
        opciones: [
            {
                texto:"Pensaria en las consecuencias para los demas.",
                personaje:"peter"
            },
            {
                texto:"Seguiria adelante incluso si conozco el resultado.",
                personaje:"cooper"
            },
            {
                texto:"Protegeria primero a las personas cercanas a mi.",
                personaje:"eleven"
            }
        ]
    },
    //Pregunta 4
    {
        texto: "¿Cual de estas caracteristicas te representa mejor?",
        opciones: [
            {
                texto:"Soy reservado, valiente, protector y muy leal.",
                personaje:"eleven"
            },
            {
                texto:"Soy una persona curiosa y siempre quiero encontar respuestas.",
                personaje:"cooper"
            },
            {
                texto:"Intento mantener el humor incluso en momentos dificiles.",
                personaje:"peter"
            }
        ]
    },
    //Pregunta 5
    {
        texto: "Si todo parece estar en tu contra,¿que te impulsa a continuar?",
        opciones: [
            {
                texto:"La responsabilidad que siento hacia otras personas.",
                personaje:"peter"
            },
            {
                texto:"Saber que aun existe una solucion.",
                personaje:"cooper"
            },
            {
                texto:"Las personas que quiero y deseo proteger",
                personaje:"eleven"
            }
        ]
    }

];
//Conexion HTML 
const pantallaInicio = document.getElementById("inicio");
const pantallaCuestionario = document.getElementById("cuestionario");
const pantallaResultado = document.getElementById("resultado");

const btnComenzar = document.getElementById("btnComenzar");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnReiniciar = document.getElementById("btnReiniciar");

const numeroPregunta = document.getElementById("numeroPregunta");
const textoPregunta = document.getElementById("pregunta");
const contenedorOpciones = document.getElementById("opciones");

const nombreResultado = document.getElementById("nombreResultado");
const universoResultado = document.getElementById("universoResultado");
const descripcionResultado = document.getElementById("descripcionResultado");
const imagenResultado = document.getElementById("imagenResultado");

//Logica cuestionario 
btnComenzar.addEventListener("click",function() {
    pantallaInicio.classList.add("oculto");
    pantallaCuestionario.classList.remove("oculto");
    mostrarPregunta();
});

//Mostrar Pregunta
function mostrarPregunta() {
    respuestaSeleccionada = null;
    btnSiguiente.disabled = true;

    const pregunta=preguntas[preguntaActual];
    numeroPregunta.textContent = 
    "PREGUNTA " + (preguntaActual + 1) +" DE " + preguntas.length;
    textoPregunta.textContent = pregunta.texto;
    contenedorOpciones.innerHTML = "";
    //For estructura iterativa

    pregunta.opciones.forEach(function  (opcion,indice){
        const boton = document.createElement("button");
        boton.classList.add("opcion");

        const letra = String.fromCharCode(65 + indice);
        boton.textContent = letra + ". " + opcion.texto;

        boton.addEventListener("click",function () {

            seleccionarRespuesta(
                opcion.personaje,
                boton
            );
        });

        contenedorOpciones.appendChild(boton);
    });

        actualizarProgreso();

};

//Seleccionar una respuesta

function seleccionarRespuesta(personaje,botonSeleccionado){
    respuestaSeleccionada=personaje;

    const botonesOpciones =
    document.querySelectorAll(".opcion");

    botonesOpciones.forEach(function (boton) {
        boton.classList.remove("seleccionada");
    });
     botonSeleccionado.classList.add("seleccionada");
    btnSiguiente.disabled = false;
}

//Boton siguiente
btnSiguiente.addEventListener("click", function () {

    if (respuestaSeleccionada === null) {
        return;
    }

    // Switch

    switch (respuestaSeleccionada) {
        case "cooper":
            puntosCooper += 1;
            break;
        case "peter":
            puntosPeter += 1;
            break;
        case "eleven":
            puntosEleven += 1;
            break;
        default:
            console.log("Respuesta no válida");
    }

    // Operador aritmetico
    preguntaActual += 1;
    // Estructura else
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
});

//Progreso
function actualizarProgreso() {
    const puntos = document.querySelectorAll(".punto");
    puntos.forEach(function (punto, indice){
        if(indice <=preguntaActual) {
            punto.classList.add("activo");
        }else{
            punto.classList.remove("activo");
        }
    });
}
// Resultado final 
function mostrarResultado() {

    pantallaCuestionario.classList.add("oculto");

    pantallaResultado.classList.remove("oculto");

    let personajeFinal = "";
// Operadores de compracion y operador logico &&
 if (
        puntosCooper >= puntosPeter &&
        puntosCooper >= puntosEleven
    ) {

        personajeFinal = "cooper";

    } else if (
        puntosPeter >= puntosCooper &&
        puntosPeter >= puntosEleven
    ) {

        personajeFinal = "peter";

    } else {

        personajeFinal = "eleven";

    }
//switch para mostarr resultado
switch (personajeFinal) {

        case "cooper":

            nombreResultado.textContent =
                "Joseph Cooper";

            universoResultado.textContent =
                "INTERSTELLAR";

            descripcionResultado.textContent =
                "Eres una persona curiosa, perseverante y racional. Incluso frente a situaciones inciertas buscas respuestas y continúas avanzando sin perder de vista a las personas que son importantes para ti.";

            imagenResultado.src =
                "img/cooper.jpg";

            imagenResultado.alt =
                "Joseph Cooper de Interstellar";

            break;


        case "peter":

            nombreResultado.textContent =
                "Peter Parker";

            universoResultado.textContent =
                "SPIDER-MAN";

            descripcionResultado.textContent =
                "Eres una persona empática, responsable e ingeniosa. Aunque enfrentas tus propios problemas, intentas hacer lo correcto y ayudar a los demás siempre que puedes.";

            imagenResultado.src =
                "img/spiderman.jpg";

            imagenResultado.alt =
                "Peter Parker, Spider-Man";

            break;


        case "eleven":

            nombreResultado.textContent =
                "Eleven";

            universoResultado.textContent =
                "STRANGER THINGS";

            descripcionResultado.textContent =
                "Eres una persona valiente, reservada y profundamente leal. Tus vínculos con las personas que quieres son una de tus mayores fortalezas y harías mucho por protegerlas.";

            imagenResultado.src =
                "img/eleven.jpg";

            imagenResultado.alt =
                "Eleven de Stranger Things";

            break;

    }

}
//reiniciar cuestionario 
btnReiniciar.addEventListener("click", function () {

    puntosCooper = 0;
    puntosPeter = 0;
    puntosEleven = 0;

    preguntaActual = 0;

    respuestaSeleccionada = null;

    pantallaResultado.classList.add("oculto");

    pantallaInicio.classList.remove("oculto");

});
