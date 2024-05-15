const comentarioService = require("../services/comentarioServices");

    async function createComentario(req, res){  
    try{
        const usuario_id = req.usuario.id;
        const {conteudo} = req.body;
        const createService = await comentarioService.createComentario(usuario_id, comentario, resenha_id);
         res.json({ status: true, message: createService});
         console.log('controlador executado');

    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro});

    }
}
    async function lerComentario(req, res){
    try{
        const lerService = await comentarioService.lerComentario();   
        res.json({ status: true, message: lerService});
        console.log("controlador executado");
    }catch(erro){
        console.log(erro);
        res.json({status: false, message: erro.message});

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
    async function atualizarComentario(req, res){
    try{
        const { conteudo} = req.body;
        const id = req.params.id;
        const usuario_id = req.usuario.id;
        const updateService = await ComentarioService.atualizarComentario( conteudo);   
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
        const deleteService = await comentarioService.deletarcomentario(id_comentario);

        res.json({status: true, message: deletarComentario})
    }catch(erro){
        console.log(erro);
        res.json({status:false, message: erro.message})
    }
}
module.exports = {
    createComentario,
    lerComentario,
    lerComentarioPorId,
    atualizarComentario,
    deletarComentario
}
    