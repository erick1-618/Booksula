const Router = require("express").Router;
const router = Router();
const usuarioControlador = require("./controller/usuarioController");
const resenhaControlador = require("./controller/resenhaController");
const comentarioControlador = require("./controller/comentarioControlle")
const auth = require("./middleware/auth");

router.post("/usuario", usuarioControlador.createUsuario);
router.get("/usuario/all", usuarioControlador.lerUsuarios);
router.get("/usuario", auth, usuarioControlador.lerUsuarioPorId);
router.patch("/usuario", auth, usuarioControlador.atualizarUsuario);
router.delete("/usuario", auth, usuarioControlador.deletarUsuario);
router.delete("/deleteAll", usuarioControlador.deleteAll); //DELETA TODOS OS USUÁRIOS CADASTRADOS!

router.post("/login", usuarioControlador.login);

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





router.get("/", (req, res) => {
    res.send("Hello World!");
    console.log("Rota definida");
});

module.exports = router;