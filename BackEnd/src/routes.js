const Router = require("express").Router;
const router = Router();
const usuarioControlador = require("./controller/usuarioController");
const resenhaControlador = require("./controller/resenhaController");
const auth = require("./middleware/auth");

router.post("/usuario", usuarioControlador.createUsuario);
router.get("/usuario", auth, usuarioControlador.lerUsuarioPorId);
router.patch("/usuario", auth, usuarioControlador.atualizarUsuario);
router.delete("/usuario", auth, usuarioControlador.deletarUsuario);

router.post("/login", usuarioControlador.login);

//CRUD resenha:

router.post("/resenha", auth, resenhaControlador.createResenha);
router.get("/resenha/all", resenhaControlador.lerResenha);
router.get("/resenha/:id", resenhaControlador.lerResenhaPorId);
router.patch("/resenha/:id", auth, resenhaControlador.atualizarResenha);
router.delete("/resenha/:id", auth, resenhaControlador.deletarResenha);
router.delete("/deleteAllresenha", resenhaControlador.deleteAll); //DELETA TODAS AS RESENHAS CADASTRADAS!



router.get("/", (req, res) => {
    res.send("Booksula");
});

module.exports = router;