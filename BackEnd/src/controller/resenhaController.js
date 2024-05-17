const resenhaService = require("../services/resenhaServices");

async function createResenha(req, res){
    try{
        const usuario_id = req.usuario.id;
        const {livro, titulo_da_resenha, conteudo, nota, imagem} = req.body;
        const createService = await resenhaService.createResenha(usuario_id, livro, titulo_da_resenha, conteudo, nota, imagem);
        res.json({ status: true, message: createService});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

async function lerResenha(req, res){
    try{
        const lerService = await resenhaService.lerResenha();   
        res.json({ status: true, message: lerService});
        console.log("controlador executado");
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});

    }
}

async function lerResenhaPorId(req, res){
    try{
        const id = req.params.id;
        const readService = await resenhaService.lerResenhaPorId(id);                
        res.json({status: true, message: readService});
        console.log("controlador executado");
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});

    }
}

async function atualizarResenha(req, res){
    try{
        const {livro, titulo_da_resenha, conteudo, nota, imagem} = req.body;
        const id = req.params.id;
        const usuario_id = req.usuario.id;
        const updateService = await resenhaService.atualizarResenha(usuario_id, id, livro, titulo_da_resenha, conteudo, nota, imagem);   
        res.json({status: true, message: updateService})
    }catch(erro){
        console.log(erro);
        res.json({ status: false, message: erro.message})
    }
}

async function deletarResenha(req, res){
    try{
        const id_usuario = req.usuario.id;
        const id_resenha = req.params.id;
        const deleteService = await resenhaService.deletarResenha(id_usuario, id_resenha);
        res.json({status: true, message: deleteService})
    }catch(erro){
        console.log(erro);
        res.json({status:false, message: erro.message})
    }
}

async function resenhasDeUmUsuario(req, res){
    try{
        const id_usuario = req.params.id;
        const readService = await resenhaService.resenhasDeUmUsuario(id_usuario);
        res.json({status: true, message: readService});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.nessage});
    }
}

module.exports = {
    createResenha,
    lerResenha,
    lerResenhaPorId,
    atualizarResenha,
    deletarResenha,
    resenhasDeUmUsuario
}