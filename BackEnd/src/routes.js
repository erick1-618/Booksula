const Router = require("express").Router;
const router = Router();
const usuarioControlador = require("./controller/usuarioController");
const auth = require("./middleware/auth");

router.post("/usuario", usuarioControlador.createUsuario);
router.get("/usuario/all", usuarioControlador.lerUsuarios);
router.get("/usuario", auth, usuarioControlador.lerUsuarioPorId);
router.patch("/usuario", auth, usuarioControlador.atualizarUsuario);
router.delete("/usuario", auth, usuarioControlador.deletarUsuario);
router.delete("/deleteAll", usuarioControlador.deleteAll); //DELETA TODOS OS USUÁRIOS CADASTRADOS!

router.post("/login", usuarioControlador.login);

router.get("/", (req, res) => {
    res.send("Hello World!");
    console.log("Rota definida");
});

module.exports = router;