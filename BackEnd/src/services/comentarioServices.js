require("dotenv").config();
const knex = require("../database/index");

    async function createComentario(usuario_id,conteudo,resenha_ID ){
    try{
        const comentario= {
            usuario_id: usuario_id, 
            conteudo: conteudo,
            resenha_ID:resenha_ID
            

        

        }
    
            await knex("comentario").insert(comentario);

            return "Comentário enviado."
    
    }catch(erro){
        throw erro;

    }
}
    async function lerComentario(){
    try{
        const comentarios = await knex("comentario").select("*");
        if (comentarios.length === 0){
            throw new Error("Sem comentarios no registro.");
        }
        
        return comentarios;

    }catch(erro){
        throw(erro);
    }
}
    async function lerComentarioPorId(id){
    try{
        const comentario= await knex("comentario").select("*").where({id: id}).first();

        if (!comentario){
            throw new Error("Não há resenha com esse id.");
        }
        return resenha;
    }catch(erro){
        throw erro;
    }
}
    async function atualizarComentario(id, conteudo, resenha_ID){
    try{
        const comentario = await knex("comentario").select("*").where({id:id}).first();
        if(!comentario){
            throw new Error("Comentário não existe");
        }
        const novoComentario = {
        conteudo: conteudo,
        }

        await knex("comentario").update(novoComentario).where({id:id});

        return "Comentário atualizado."

    }catch(erro){
        throw erro;
    }
}
    async function deletarComentario(id){
    try{
        const comentario = await knex("comentario").select("*").where({id:id}).first();

            if(!comentario){
                throw new Error("Comentario não existe.");
            }
    
            await knex("comentario").delete().where({id:id});    
            return "Comentario deletado."
    
    }catch(erro){
        throw erro;
    }
}

module.exports = {
    createComentario,
    lerComentario,
    lerComentarioPorId,
    atualizarComentario,
    deletarComentario
}
