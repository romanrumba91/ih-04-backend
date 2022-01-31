// 1. Importaciones

const express =  require("express")
const res = require("express/lib/response")
const router = express.Router()

// 2. Ruteo
router.get("/", (req, res) => {


    res.send("Hola mundo")
})

router.get("/contacto", ( => {
    res.send("Contacto")
}))
// 3. Exportaciones
module.exports = router