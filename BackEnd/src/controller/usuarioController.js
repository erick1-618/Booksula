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

async function lerUsuarios(req, res){
    try{
        const readService = await usuarioServices.lerUsuarios();
        res.json({status: true, message: readService});
        console.log('controlador executado');
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function lerUsuarioPorId(req, res){
    try{
        const id_usuario = req.params.id;
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
        const id_usuario = req.params.id;
        const updateService = await usuarioServices.atualizarUsuario(id_usuario, nome, email, password);
        res.json({status: true, message: updateService});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function deletarUsuario(req, res){
    try{
        const id_usuario = req.params.id;
        const deleteService = await usuarioServices.deletarUsuario(id_usuario);
        res.json({status: true, message: deleteService});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function deleteAll(req, res){
    try{
        const deleteAllService = await usuarioServices.deleteAll();
        res.json({status: true, message: deleteAll});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

module.exports = {
    createUsuario,
    lerUsuarios,
    lerUsuarioPorId,
    atualizarUsuario,
    deletarUsuario,
    deleteAll
}