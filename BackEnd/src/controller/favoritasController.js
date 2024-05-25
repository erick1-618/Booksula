const favoritasServices = require("../services/favoritasServices");

async function favoritarResenha(req, res){
    try{
        const id_usuario = req.usuario.id;
        const resenha = req.body;
        const id_resenha = resenha.id
        const favoriteService = await favoritasServices.favoritarResenha(id_usuario, id_resenha);

        res.json({status: true, message: favoriteService})
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function verResenhasFavoritadas(req, res){
    try{
        const id_usuario = req.usuario.id;
        const verFavoritos = await favoritasServices.verResenhasFavoritadas(id_usuario);

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
        const deleteService = await favoritasServices.excluirDosFavoritos(id_usuario, id_resenha);

        res.json({status: true, message: deleteService})
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

module.exports = {
    favoritarResenha,
    verResenhasFavoritadas,
    excluirDosFavoritos
}