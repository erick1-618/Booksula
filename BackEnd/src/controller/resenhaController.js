const resenhaService = require("../services/resenhaServices");

async function createResenha(req, res){
    try{
        const usuario_id = req.usuario.id;
        const {livro, titulo_da_resenha, conteudo, nota, imagem} = req.body;
        const createService = await resenhaService.createResenha(usuario_id, livro, titulo_da_resenha, conteudo, nota, imagem);
         res.json({ status: true, message: createService});
         console.log('controlador executado');

    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro});

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
        const updateService = await resenhaService.atualizarResenha(id, livro, titulo_da_resenha, conteudo, nota, imagem);   
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
        const deleteService = await resenhaService.deletarResenha(id_resenha);

        res.json({status: true, message: deletarResenha})
    }catch(erro){
        console.log(erro);
        res.json({status:false, message: erro.message})
    }
}

async function deleteAll(req, res){
    try{
        const deleteAllService = await resenhaService.deleteAll();
        res.json({status: true, message: deleteAll});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});
    }
}

module.exports = {
    createResenha,
    lerResenha,
    lerResenhaPorId,
    atualizarResenha,
    deletarResenha,
    deleteAll
}