const Router = require("express").Router;
const router = Router();
const usuarioControlador = require("./controller/usuarioController");

router.post("/usuario", usuarioControlador.createUsuario);
router.get("/usuario", usuarioControlador.lerUsuarios);
router.get("/usuario/:id", usuarioControlador.lerUsuarioPorId)

router.get("/", (req, res) => {
    res.send("Hello World!");
    console.log("Rota definida");
});

module.exports = router;