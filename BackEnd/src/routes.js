const Router = require("express").Router;
const router = Router();
const usuarioControlador = require("./controller/usuarioController");
const auth = require("./middleware/auth");

router.post("/usuario", usuarioControlador.createUsuario);
router.get("/usuario", auth, usuarioControlador.lerUsuarioPorId);
router.patch("/usuario", auth, usuarioControlador.atualizarUsuario);
router.delete("/usuario", auth, usuarioControlador.deletarUsuario);

//ROTAS PARA O BÔNUS DE AMIGOS
router.get("/usuario/amigos", auth, usuarioControlador.verAmigos);
router.get("/usuario/solicitacoes", auth, usuarioControlador.verSolicitacoes);
router.post("/usuario/amigos", auth, usuarioControlador.adicionarAmigos);
router.patch("/usuario/amigos", auth, usuarioControlador.aceitarSolicitacao);
router.delete("/usuario/amigos", auth, usuarioControlador.deletarOuRejeitarAmigo);

router.post("/login", usuarioControlador.login);

router.get("/", (req, res) => {
    res.send("Booksula");
});

module.exports = router;