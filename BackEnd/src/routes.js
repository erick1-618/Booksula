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

//ROTAS PARA O BÔNUS DE AMIGOS
router.get("/usuario/amigos", auth, usuarioControlador.verAmigos);
router.post("/usuario/amigos", auth, usuarioControlador.adicionarAmigos);
router.patch("/usuario/amigos", auth, usuarioControlador.aceitarSolicitacao);
router.delete("/usuario/amigos", auth, usuarioControlador.deletarOuRejeitarAmigo);
router.delete("/usuario/amigos/deleteAll", usuarioControlador.deleteAllFriends);

router.post("/login", usuarioControlador.login);

router.get("/", (req, res) => {
    res.send("Hello World!");
    console.log("Rota definida");
});

module.exports = router;