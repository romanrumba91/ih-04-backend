// 1. Importaciones

const express =  require("express")
const router = express.Router()

// 2. Ruteo
router.get("/", (req, res) => {


    res.send("Hola mundo")
})

// 3. Exportaciones
module.exports = router