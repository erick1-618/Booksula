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

async function verAmigos(req, res){
    try{
        const id_usuario = req.usuario.id;
        const verAmigos = await usuarioServices.verAmigos(id_usuario);
        
        res.json({status: true, message: verAmigos});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function adicionarAmigos(req, res){
    try{
        const id_usuario = req.usuario.id;
        const email = req.body.email; //EMAIL DE QUERM EU O USUARIO QUER ADICIONAR
        const adicionarAmigos = await usuarioServices.adicionarAmigos(id_usuario, email);
        
        res.json({status: true, message: adicionarAmigos});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function aceitarSolicitacao(req, res){
    try{
        const id_usuario = req.usuario.id;
        const email = req.body.email; //EMAIL DE QUEM O USUARIO QUER ACEITAR A SOLICITAÇÃO
        const aceitarAmigo = await usuarioServices.aceitarAmigo(id_usuario, email);
        
        res.json({status: true, message: aceitarAmigo});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function deletarOuRejeitarAmigo(req, res){
    try{
        const id_usuario = req.usuario.id;
        const email = req.body.email; //EMAIL DE QUEM O USUARIO QUER DESFAZER A AMIZADE OU NEGAR A SOLICITAÇÃO
        const deleteService = await usuarioServices.deletarOuRejeitarAmigo(id_usuario, email);
        
        res.json({status: true, message: deleteService});
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
    verAmigos,
    adicionarAmigos,
    aceitarSolicitacao,
    deletarOuRejeitarAmigo,
}