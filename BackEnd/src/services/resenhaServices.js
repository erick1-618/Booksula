require("dotenv").config();
const knex = require("../database/index");

async function createResenha(livro, titulo_da_resenha, conteudo, nota, imagem){
    try{
        const resenha = {
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

    async function atualizarResenha(id, livro, titulo_da_resenha, conteudo, nota, imagem){
        try{
            const resenha = await knex("resenha").select("*").where({id:id}).first();
            if(!resenha){
                throw new Error("Resenha não existe");
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
    async function deletarResenha(id){
        try{
            const resenha = await knex("resenha").select("*").where({id:id}).first();

                if(!resenha){
                    throw new Error("resenha não existe.");
                }
        
                await knex("resenha").delete().where({id:id});    
                return "Usuário deletado."
        
        }catch(erro){
            throw erro;
        }
    }

    async function deleteAll(){
        try{
            await knex("resenha").select("*").delete();
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
    deleteAll
}