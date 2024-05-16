const Router = require("express").Router;
const router = Router();
const usuarioControlador = require("./controller/usuarioController");
const resenhaControlador = require("./controller/resenhaController");
const comentarioControlador = require("./controller/comentarioControlle")
const auth = require("./middleware/auth");

//CRUD usuario
router.post("/usuario", usuarioControlador.createUsuario);
router.get("/usuario", auth, usuarioControlador.lerUsuarioPorId);
router.patch("/usuario", auth, usuarioControlador.atualizarUsuario);
router.delete("/usuario", auth, usuarioControlador.deletarUsuario);
router.post("/login", usuarioControlador.login);

//ROTAS PARA O BÔNUS DE AMIGOS
router.get("/usuario/amigos", auth, usuarioControlador.verAmigos);
router.get("/usuario/solicitacoes", auth, usuarioControlador.verSolicitacoes);
router.post("/usuario/amigos", auth, usuarioControlador.adicionarAmigos);
router.patch("/usuario/amigos", auth, usuarioControlador.aceitarSolicitacao);
router.delete("/usuario/amigos", auth, usuarioControlador.deletarOuRejeitarAmigo);

//CRUD resenha:
router.post("/resenha", auth, resenhaControlador.createResenha);
router.get("/resenha/all", resenhaControlador.lerResenha);
router.get("/resenha/:id", resenhaControlador.lerResenhaPorId);
router.patch("/resenha/:id", auth, resenhaControlador.atualizarResenha);
router.delete("/resenha/:id", auth, resenhaControlador.deletarResenha);
router.delete("/deleteAllresenha", resenhaControlador.deleteAll); //DELETA TODAS AS RESENHAS CADASTRADAS!

//CRUD comentario:
router.post("/comentario", auth, comentarioControlador.createComentario);
router.get("/comentario/all", comentarioControlador.lerComentario);
router.get("/comentario/:id", comentarioControlador.lerComentarioPorId);
router.patch("/comentario/:id", auth, comentarioControlador.atualizarComentario);
router.delete("/comentario/:id", auth, comentarioControlador.deletarComentario);

//Favoritar resenhas;
router.post("/usuario/favoritas", auth, usuarioControlador.favoritarResenha);
router.get("/usuario/favoritas", auth, usuarioControlador.verResenhasFavoritadas);
router.delete("/usuario/favoritas", auth, usuarioControlador.excluirDosFavoritos);

router.get("/", (req, res) => {
    res.send("Booksula");
});

module.exports = router;