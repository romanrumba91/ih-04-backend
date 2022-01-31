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
//activar variable entornos, si estas en local vale una cosa y entorno en otroa
require("dotenv").config()
//Activa la carpeta publica del proyecto
app.use(express.static("public"))
//Establecer vistas
//Local: __dirname vale http:...
//Remoto: __dirname vale https:...
//decir donde esta la carpeta de vistas 
app.set("views", __dirname + "/views")

//indicar que motor de template vamos a usar
//handlebards -- es un motor que permite manejar logica dentro de archivos html
app.set("view engine" , "hbs")

//Rutasds

app.use("/", require("./routes/index"))

//Servidores

app.listen(process.env.PORT, () => {

    console.log("Servidor activo")
})