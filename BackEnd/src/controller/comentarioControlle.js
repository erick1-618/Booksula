const comentarioService = require("../services/comentarioServices");

async function createComentario(req, res){  
    try{
        const usuario_id = req.usuario.id;
        const resenha_ID = req.params.id;
        const {conteudo} = req.body;
        const createService = await comentarioService.createComentario(usuario_id, conteudo, resenha_ID);
        res.json({ status: true, message: createService});
        console.log('controlador executado');
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro});
    }
}

async function lerComentarioPorId(req, res){
    try{
        const id = req.params.id;
        const readService = await comentarioService.lerComentarioPorId(id);                
        res.json({status: true, message: readService});
        console.log("controlador executado");
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});

    }
}

async function comentariosDeUmaResenha(req, res){
    try{
        const id_resenha = req.params.id;
        const readService = await comentarioService.comentariosDeUmaResenha(id_resenha);                
        res.json({status: true, message: readService});
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});

    }
}

async function atualizarComentario(req, res){
    try{
        const {conteudo} = req.body;
        const id = req.params.id;
        const usuario_id = req.usuario.id;
        const updateService = await comentarioService.atualizarComentario(usuario_id, id, conteudo);   
        res.json({status: true, message: updateService})
    }catch(erro){
        console.log(erro);
        res.json({ status: false, message: erro.message})
    }
}

async function deletarComentario(req, res){
    try{
        const id_usuario = req.usuario.id;
        const id_comentario = req.params.id;
        const deleteService = await comentarioService.deletarComentario(id_usuario, id_comentario);

        res.json({status: true, message: deleteService})
    }catch(erro){
        console.log(erro);
        res.json({status:false, message: erro.message})
    }
}

module.exports = {
    createComentario,
    lerComentarioPorId,
    atualizarComentario,
    deletarComentario,
    comentariosDeUmaResenha
}
    