require("dotenv").config();
const knex = require("../database/index");

async function createResenha(usuario_id, livro, titulo_da_resenha, conteudo, nota, imagem){
    try{
        const existeUsuario = await knex("usuario").select("*").where({id: usuario_id}).first();
        if(!existeUsuario){
            throw new Error("Usuário não existe!")
        }
        if(usuario_id === "" || livro == "" || titulo_da_resenha == "" || conteudo == "" || nota == ""){
            throw new Error("Preencha todos os campos adequadamente");
        }
        if(nota > 10 || nota < 0){
            throw new Error("Insira uma nota válida! (ENTRE 0 E 10)");
        }
        const resenha = {
            usuario_id: usuario_id,
            livro: livro,
            titulo_da_resenha: titulo_da_resenha,
            conteudo: conteudo,
            nota: nota,
            imagem: imagem
        }
        await knex("resenha").insert(resenha);
        return "Resenha postada."
    }catch(erro){
        throw erro;
    }
}
async function lerResenha(){
    try{
        const resenhas = await knex("resenha").select("*");
        if (resenhas.length === 0){
            throw new Error("Sem resenhas no registro.");
        }
        
        return resenhas;

    }catch(erro){
        throw(erro);
    }
}

async function lerResenhaPorId(id){
    try{
        const resenha = await knex("resenha").select("*").where({id: id}).first();

        if (!resenha){
            throw new Error("Não há resenha com esse id.");
        }
        return resenha;
    }catch(erro){
        throw erro;
    }
}

async function atualizarResenha(id_usuario, id, livro, titulo_da_resenha, conteudo, nota, imagem){
    try{
        const resenha = await knex("resenha").select("*").where({id:id}).first();
        if(!resenha){
            throw new Error("Resenha não existe");
        }
        if(resenha.usuario_id !== id_usuario){
            throw new Error("A resenha não pertence a esse usuário!");
        }
        if(livro == "" || titulo_da_resenha == "" || conteudo == "" || nota == ""){
            throw new Error("ERROR: Campos vazios");
        }
        const novaResenha = {
            livro: livro,
            titulo_da_resenha: titulo_da_resenha,
            conteudo: conteudo,
            nota: nota,
            imagem: imagem
        }
        await knex("resenha").update(novaResenha).where({id:id});

        return "Resenha atualizada."

    }catch(erro){
        throw erro;
    }
}
async function deletarResenha(id_usuario, id){
    try{
        const resenha = await knex("resenha").select("*").where({id:id}).first();
        if(!resenha){
            throw new Error("resenha não existe.");
        }
        if(resenha.usuario_id !== id_usuario){
            throw new Error("A resenha não pertence a esse usuário!");
        }
        await knex("comentario").delete().where({resenha_ID: id});
        await knex("resenhas_favoritadas").delete().where({resenha_id: id});
        await knex("resenha").delete().where({id:id});    
        return "Resenha deletada";

    }catch(erro){
        throw erro;
    }
}

async function resenhasDeUmUsuario(id_usuario){
    try{
        resenhas = await knex("resenha").select("*").where({usuario_id: id_usuario});
        if(resenhas.length === 0){
            throw new Error("Esse usuário não publicou nenhuma resenha!");
        }
        return resenhas;
    }catch(erro){
        throw erro;
    }
}

module.exports ={
    createResenha,
    lerResenha,
    lerResenhaPorId,
    atualizarResenha,
    deletarResenha,
    resenhasDeUmUsuario
}