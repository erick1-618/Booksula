const usuarioService = require("../services/usuarioServices");

async function createUsuario(req, res){
    try{
        const {nome, email, password} = req.body;
        const createService = await usuarioService.criarUsuario(nome, email, password);
        res.json({status: true, message: createService});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

module.exports = {
    createUsuario
}