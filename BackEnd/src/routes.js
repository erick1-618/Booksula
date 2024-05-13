const Router = require("express").Router;
const router = Router();
const usuarioControlador = require("./controller/usuarioController");
const auth = require("./middleware/auth");

router.post("/usuario", usuarioControlador.createUsuario);
router.get("/usuario", auth, usuarioControlador.lerUsuarioPorId);
router.patch("/usuario", auth, usuarioControlador.atualizarUsuario);
router.delete("/usuario", auth, usuarioControlador.deletarUsuario);

router.post("/login", usuarioControlador.login);

router.get("/", (req, res) => {
    res.send("Booksula");
});

module.exports = router;