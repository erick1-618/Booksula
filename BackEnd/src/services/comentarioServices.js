require("dotenv").config();
const knex = require("../database/index");

async function createComentario(usuario_id,conteudo,resenha_ID){
    try{
        if(usuario_id == null || conteudo == null || resenha_ID == null){
            throw new Error("Preencha todos os campos adequadamente");
        }
        const resenhaExiste = await knex("resenha").select("*").where({id: resenha_ID});
        if(!resenhaExiste){
            throw new Error("Resenha não existe!");
        }
        const comentario= {
            usuario_ID: usuario_id, 
            conteudo: conteudo,
            resenha_ID: resenha_ID
        }
        await knex("comentario").insert(comentario);
        return "Comentário enviado."
    }catch(erro){
        throw erro;
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

async function comentariosDeUmaResenha(resenha_id){
    try{
        const comentario = await knex("comentario").select("*").where({resenha_ID: resenha_id});
        if(comentario.length === 0){
            throw new Error("Essa resenha não possui comentários");
        }
        return comentario;
    }catch(erro){
        throw erro;
    }
}

async function atualizarComentario(id_usuario, id, conteudo){
    try{
        const comentario = await knex("comentario").select("*").where({id:id}).first();
        if(!comentario){
            throw new Error("Comentário não existe");
        }
        if(comentario.usuario_ID !== id_usuario){
            throw new Error("Esse comentário não pertence a esse usuário");
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

async function deletarComentario(id_usuario, id){
    try{
        const comentario = await knex("comentario").select("*").where({id:id}).first();
        if(!comentario){
            throw new Error("Comentario não existe.");
        }
        if(comentario.usuario_ID !== id_usuario){
            throw new Error("O comentário não pertence a esse usuário");
        }
        await knex("comentario").delete().where({id:id});    
        return "Comentario deletado."
    
    }catch(erro){
        throw erro;
    }
}

module.exports = {
    createComentario,
    lerComentarioPorId,
    atualizarComentario,
    deletarComentario,
    comentariosDeUmaResenha
}
