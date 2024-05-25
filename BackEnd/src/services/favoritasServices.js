require("dotenv").config();
const knex = require("../database/index");

async function favoritarResenha(id_usuario, id_resenha){
    try{
        const jaExiste = await knex("resenhas_favoritadas").select("*").where({usuario_id: id_usuario, resenha_id: id_resenha}).first();
        const resenhaExiste = await knex("resenha").select("*").where({id:id_resenha}).first();
        const usuarioExiste = await knex("usuario").select("*").where({id:id_usuario}).first();
        if(jaExiste){
            throw new Error("Resenha já favoritada");
        }
        if(!usuarioExiste){
            throw new Error("Usuário não existe");
        }
        if(!resenhaExiste){
            throw new Error("Resenha não identificada");
        }
        if(resenhaExiste.usuario_id == id_usuario){
            throw new Error("Não pode favoritar a própria resenha");
        }
        const favoritarResenha = {
            usuario_id: id_usuario,
            resenha_id: id_resenha
        }
        await knex("resenhas_favoritadas").insert(favoritarResenha);
        return "Resenha favoritada com sucesso";
    }catch(erro){
        throw erro;
    }
}

async function verResenhasFavoritadas(id_usuario){
    try{
        const resenhasFavoritadas = await knex("resenhas_favoritadas").select("*").where({usuario_id: id_usuario});
        if(resenhasFavoritadas.length === 0){
            throw new Error("Não favoritou nenhuma resenha");
        }
        let resenhas = [];
        for(const resFav of resenhasFavoritadas){
            resenhas.push(await knex("resenha").select("*").where({id: resFav.resenha_id}).first());
        }

        resenhas = resenhas.map(resenha => {
            delete resenha.conteudo;
            delete resenha.usuario_id;
            delete resenha.imagem;
            return resenha;
        })

        return resenhas;

    }catch(erro){
        throw erro;
    }
}

async function excluirDosFavoritos(id_usuario, id_resenha){
    try{
        const existeLigacao = await knex("resenhas_favoritadas").select("*").where({usuario_id: id_usuario, resenha_id: id_resenha}).first();
        const resenhaExiste = await knex("resenha").select("*").where({id:id_resenha}).first();
        const usuarioExiste = await knex("usuario").select("*").where({id:id_usuario}).first();
        if(!usuarioExiste){
            throw new Error("Usuário não existe");
        }
        if(!resenhaExiste){
            throw new Error("Resenha não identificada");
        }
        if(!existeLigacao){
            throw new Error("Resenha não favoritada");
        }
        await knex("resenhas_favoritadas").delete().where({usuario_id: id_usuario, resenha_id: id_resenha});
        
        return "Resenha excluída dos favoritos";
    }catch(erro){
        throw erro;
    }
}

module.exports = {
    favoritarResenha,
    verResenhasFavoritadas,
    excluirDosFavoritos
}