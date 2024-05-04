const Router = require("express").Router;
const router = Router();
const usuarioControlador = require("./controller/usuarioController");

router.post("/usuario", usuarioControlador.createUsuario);

router.get("/", (req, res)=> {
    res.send("Hello World!");
    console.log("Rota definida");
});

module.exports = router;