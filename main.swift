import Foundation

struct Opcion {
    let texto: String
    let personaje: String
}

struct Pregunta {
    let texto: String
    let opciones: [Opcion]
}


let preguntas = [

    Pregunta(
        texto: "Cuando tienes un problema inesperado, ¿qué haces primero?",
        opciones: [
            Opcion(texto: "Intento entender qué está pasando antes de actuar.", personaje: "cooper"),
            Opcion(texto: "Pienso rápidamente cómo puedo ayudar a los demás.", personaje: "peter"),
            Opcion(texto: "Confío en mi instinto y actúo aunque tenga miedo.", personaje: "eleven")
        ]
    ),

    Pregunta(
        texto: "¿Qué valoras más cuando pasas por momentos difíciles?",
        opciones: [
            Opcion(texto: "La lealtad de las personas que quiero.", personaje: "eleven"),
            Opcion(texto: "Encontrar una solución lógica al problema.", personaje: "cooper"),
            Opcion(texto: "Hacer lo correcto aunque sea complicado.", personaje: "peter")
        ]
    ),

    Pregunta(
        texto: "Si tuvieras que tomar una decisión importante, ¿qué harías?",
        opciones: [
            Opcion(texto: "Pensaría en las consecuencias para los demás.", personaje: "peter"),
            Opcion(texto: "Seguiría adelante incluso si no conozco el resultado.", personaje: "cooper"),
            Opcion(texto: "Protegería primero a las personas cercanas a mí.", personaje: "eleven")
        ]
    ),

    Pregunta(
        texto: "¿Cuál de estas características te representa mejor?",
        opciones: [
            Opcion(texto: "Soy reservado, valiente y muy protector.", personaje: "eleven"),
            Opcion(texto: "Soy curioso y siempre quiero encontrar respuestas.", personaje: "cooper"),
            Opcion(texto: "Intento mantener el humor incluso en momentos difíciles.", personaje: "peter")
        ]
    ),

    Pregunta(
        texto: "Si todo parece estar en tu contra, ¿qué te impulsa a continuar?",
        opciones: [
            Opcion(texto: "La responsabilidad que siento hacia otras personas.", personaje: "peter"),
            Opcion(texto: "Saber que todavía puede existir una solución.", personaje: "cooper"),
            Opcion(texto: "Las personas que quiero y deseo proteger.", personaje: "eleven")
        ]
    )
]

//  Variables

var puntosCooper = 0
var puntosPeter = 0
var puntosEleven = 0

print("================================")
print("     ¿QUÉ PERSONAJE ERES?")
print("================================\n")

//For-in

for (indice, pregunta) in preguntas.enumerated() {

    print("Pregunta \(indice + 1) de \(preguntas.count)")
    print(pregunta.texto)

    for (i, opcion) in pregunta.opciones.enumerated() {
        print("\(i + 1). \(opcion.texto)")
    }

    print("Selecciona una opción (1-3): ", terminator: "")

    if let entrada = readLine(),
       let respuesta = Int(entrada),
       respuesta >= 1 && respuesta <= 3 {

        let personaje = pregunta.opciones[respuesta - 1].personaje

        // Switch

        switch personaje {

        case "cooper":
            puntosCooper += 1

        case "peter":
            puntosPeter += 1

        case "eleven":
            puntosEleven += 1

        default:
            break
        }

    } else {
        print("Opción inválida.\n")
    }

    print("")
}

// Resultado

var personajeFinal = ""

if puntosCooper >= puntosPeter && puntosCooper >= puntosEleven {
    personajeFinal = "cooper"

} else if puntosPeter >= puntosCooper && puntosPeter >= puntosEleven {
    personajeFinal = "peter"

} else {

    personajeFinal = "eleven"
}

// Mostrar resultado
print("================================\n   TU PERSONAJE ES\n================================")

switch personajeFinal {

case "cooper":

    print(" Joseph Cooper")
    print("INTERSTELLAR")
    print("Eres una persona curiosa, perseverante y racional.")

case "peter":

    print("Peter Parker")
    print("SPIDER-MAN")
    print("Eres una persona empática, responsable e ingeniosa.")

case "eleven":

    print(" Eleven")
    print("STRANGER THINGS")
    print("Eres una persona valiente, reservada y profundamente leal.")

default:
    break
}