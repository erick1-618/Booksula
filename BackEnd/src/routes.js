const Router = require("express").Router;
const router = Router();
const usuarioControlador = require("./controller/usuarioController");
const resenhaControlador = require("./controller/resenhaController");
const comentarioControlador = require("./controller/comentarioControlle");
const favoritasControlador = require("./controller/favoritasController");
const amigoControlador = require("./controller/amigoController");
const auth = require("./middleware/auth");

//CRUD usuario
router.post("/usuario", usuarioControlador.createUsuario);
router.get("/usuario", auth, usuarioControlador.lerUsuarioPorId);
router.patch("/usuario", auth, usuarioControlador.atualizarUsuario);
router.delete("/usuario", auth, usuarioControlador.deletarUsuario);
router.post("/login", usuarioControlador.login);

//ROTAS PARA O BÔNUS DE AMIGOS
router.get("/usuario/amigos", auth, amigoControlador.verAmigos);
router.get("/usuario/solicitacoes", auth, amigoControlador.verSolicitacoes);
router.post("/usuario/amigos", auth, amigoControlador.adicionarAmigos);
router.patch("/usuario/amigos", auth, amigoControlador.aceitarSolicitacao);
router.delete("/usuario/amigos", auth, amigoControlador.deletarOuRejeitarAmigo);

//CRUD resenha:
router.post("/resenha", auth, resenhaControlador.createResenha);
router.get("/resenha/all", resenhaControlador.lerResenha);
router.get("/resenha/:id", resenhaControlador.lerResenhaPorId);
router.patch("/resenha/:id", auth, resenhaControlador.atualizarResenha);
router.delete("/resenha/:id", auth, resenhaControlador.deletarResenha);
router.get("/usuario/:id/resenha", auth, resenhaControlador.resenhasDeUmUsuario);

//CRUD comentario:
router.get("/resenha/:id/comentario", auth, comentarioControlador.comentariosDeUmaResenha);
router.post("/resenha/:id/comentario", auth, comentarioControlador.createComentario);
router.get("/comentario/:id", auth, comentarioControlador.lerComentarioPorId);
router.patch("/comentario/:id", auth, comentarioControlador.atualizarComentario);
router.delete("/comentario/:id", auth, comentarioControlador.deletarComentario);

//Favoritar resenhas;
router.post("/usuario/favoritas", auth, favoritasControlador.favoritarResenha);
router.get("/usuario/favoritas", auth, favoritasControlador.verResenhasFavoritadas);
router.delete("/usuario/favoritas", auth, favoritasControlador.excluirDosFavoritos);

router.get("/", (req, res) => {
    res.send("Booksula");
});

module.exports = router;