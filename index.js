/**
 * Patrones de diseno
 * son propuestos y casos de uso diario que permiten resolver problemas
 * cotidianos                               
 * 
 * 1. Module Pattern - Patron Modular
 * 
 */



// Importaciones
//Procesos de traernos funciones o variables de otros archivos js a este

//A. Archivos externos propios
//const suma = require("./suma")
//console.log(suma(2,4))

//B. Archivos de node_module
//const express= require("express")
//console.log(express)

//C. Ejercicio resta
//const resta = require("./resta")
//console.log(resta(4,2))

//Express es una libreria que funciona para la gestion de ruteos y middlewares

const express =  require("express")
const app = express()

// Middlewares

//Rutasds

app.use("/", require("./routes/index"))

//Servidores

app.listen(3006, () => {

    console.log("Servidor activo")
})