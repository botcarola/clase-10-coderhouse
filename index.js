// storage: almacenamiento local que me permite volcar datos en el navegador
//js me permite hacer uso de este espacio para subir datos y también obtenerlos

// localStorage: la info prevalece

localStorage.setItem("nombreBonito", "Azucena")

// forma para saber cuántos elementos hay en localStorage

console.log(localStorage.length)

// método para conseguir esta información

const nombreBonito = localStorage.getItem("nombreBonito")

console.log(nombreBonito)
console.log(typeof nombreBonito)

// como borrar elementos que hayamos subido al ls

localStorage.removeItem("nombreBonito")

// sessionStorage: la información tiene vencimiento, prevalece siempre y cuando esté abierta la pestaña

sessionStorage.setItem("nombres", "Jorge")

// forma para saber cuántos elementos hay en sessionStorage

console.log(sessionStorage.length)

// método para conseguir la información

const nombres = sessionStorage.getItem("nombres")

console.log(nombres, typeof nombres)

// como borrar elementos que hayamos subido al st

sessionStorage.removeItem("nombres")

// JSON JavaScript Object Notation
// FORMATO TEXTO PLANO QUE FACILITA LA TRANSMISIÓN DE DATOS ENTRE DOS ÁMBITOS

// como convertir un valor en un JSON:

const estudiantes = ["Jorge", "Patricio", "Ana Paula", "Nicolas"]

// ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
// no se interactúa de esta forma con el ls:

// localStorage.setItem("estudiante", estudiantes)

// const recuperarInfoDelLS = localStorage.getItem("estudiante")

// console.log(recuperarInfoDelLS, typeof recuperarInfoDelLS)

// console.log(JSON.parse())

// forma correcta de subir elementos al ls ----->

// 1) NECESITO CONVERTIRLO EN JSON

const estudiantesJSON = JSON.stringify(estudiantes)
console.log(estudiantes)
console.log(estudiantesJSON)

// array vuelto JSON

// for(let i = 0; i < estudiantesJSON.length; i++){
//     console.log(estudiantesJSON[i])
// }

// // array

// for(let i = 0; i < estudiantes.length; i++){
//     console.log(estudiantes[i])
// }

// 2) subir JSON al ls

localStorage.setItem("estudiantes", estudiantesJSON)

// 3) obtener el elemento que se haya en el ls

const obtenerEstudiantesDelLS = localStorage.getItem("estudiantes")

console.log(obtenerEstudiantesDelLS)

// 4) realizar el parseo para recuperar su forma original y que js pueda interpretarlo efectivamente

const estudiantesParseados = JSON.parse(obtenerEstudiantesDelLS)

console.log(estudiantesParseados)

// proyecto grupal

const formulario = document.querySelector("#formulario-nombres")
const inputNombres = document.querySelector("#input-nombre")
const contenedorDeNombres = document.querySelector("#contenedor")

console.log(formulario, inputNombres)

let estudiantesCoderhouse = []

const pushearNombre = (array, valor) => {
    array.push(valor)    
}

const aHTML = (array) => {

    const arrayAHtml = array.reduce((acc, nombre) => {
        return acc + `<p>${nombre}</p>`
    }, "")

    return arrayAHtml
}

const convertirAJSONYSubirAlLS = (clave, valor) => {
    const arrayAJSON = JSON.stringify(valor)
    localStorage.setItem(clave, arrayAJSON)
}

const traerDelLS = (clave) => {
    const arrayTraidoDelLS = localStorage.getItem("estudiantesCoderhouse") || "[]"
    const parsearArray = JSON.parse(arrayTraidoDelLS)
    return parsearArray
}

formulario.onsubmit = (event) => {
    event.preventDefault()
    pushearNombre(estudiantesCoderhouse, inputNombres.value)
    formulario.reset() // permite resetear los campos de los formularios
    contenedorDeNombres.innerHTML = aHTML(estudiantesCoderhouse)  
    convertirAJSONYSubirAlLS("estudiantesCoderhouse", estudiantesCoderhouse) 
    console.log(estudiantesCoderhouse)
}

let estudiantesCoderhouseTraidosDelLS = traerDelLS("estudiantesCoderhouse")
estudiantesCoderhouse = estudiantesCoderhouseTraidosDelLS
contenedorDeNombres.innerHTML = aHTML(estudiantesCoderhouse)
console.log(estudiantesCoderhouse)

