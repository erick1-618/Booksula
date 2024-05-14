const usuarioServices = require("../services/usuarioServices");

async function createUsuario(req, res){
    try{
        const {nome, email, password} = req.body;
        const createService = await usuarioServices.criarUsuario(nome, email, password);
        res.json({status: true, message: createService});
        console.log('controlador executado');
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function lerUsuarioPorId(req, res){
    try{
        const id_usuario = req.usuario.id;
        const readService = await usuarioServices.lerUsuarioPorId(id_usuario);
        res.json({status: true, message: readService});
        console.log('controlador executado');
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function atualizarUsuario(req, res){
    try{
        const {nome, email, password} = req.body;
        const id_usuario = req.usuario.id;
        const updateService = await usuarioServices.atualizarUsuario(id_usuario, nome, email, password);
        res.json({status: true, message: updateService});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function deletarUsuario(req, res){
    try{
        const id_usuario = req.usuario.id;
        const deleteService = await usuarioServices.deletarUsuario(id_usuario);
        res.json({status: true, message: deleteService});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function login(req, res){
    try{
        const {email, password} = req.body;
        const login = await usuarioServices.login(email, password);

        res.json({status: true, token: login});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function favoritarResenha(req, res){
    try{
        const id_usuario = req.usuario.id;
        const resenha = req.body;
        const id_resenha = resenha.id
        const favoriteService = await usuarioServices.favoritarResenha(id_usuario, id_resenha);

        res.json({status: true, message: favoriteService})
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function verResenhasFavoritadas(req, res){
    try{
        const id_usuario = req.usuario.id;
        const verFavoritos = await usuarioServices.verResenhasFavoritadas(id_usuario);

        res.json({status: true, message: verFavoritos});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function excluirDosFavoritos(req, res){
    try{
        const id_usuario = req.usuario.id;
        const resenha = req.body;
        const id_resenha = resenha.id;
        const deleteService = await usuarioServices.excluirDosFavoritos(id_usuario, id_resenha);

        res.json({status: true, message: deleteService})
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

module.exports = {
    createUsuario,
    lerUsuarioPorId,
    atualizarUsuario,
    deletarUsuario,
    login,
    favoritarResenha,
    verResenhasFavoritadas,
    excluirDosFavoritos
}