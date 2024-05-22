require("dotenv").config();
const knex = require("../database/index");

async function verAmigos(usuario_id){
    try{
        const ligacoesAmigos = await knex("amizade").select("*").where({usuario1_ID:usuario_id, status: "A"}).orWhere({usuario2_ID:usuario_id, status: "A"});
        if(ligacoesAmigos.length === 0){
            throw new Error("Nenhum amigo");
        }
        let amigos = [];
        for(const ligacao of ligacoesAmigos){
            if(ligacao.usuario1_ID === usuario_id){
                amigos.push(await knex("usuario").select("*").where({id: ligacao.usuario2_ID}).first());
            }
            else{
                amigos.push(await knex("usuario").select("*").where({id: ligacao.usuario1_ID}).first());
            }
        }

        amigos = amigos.map(amigo => {
            delete amigo.password;
            return amigo;
        })

        return amigos;
    }catch(erro){
        throw erro;
    }
}

async function verSolicitacoes(usuario_id){
    try{
        const solicitacoes = await knex("amizade").select("*").where({usuario2_ID: usuario_id, status: "P"});
        if(solicitacoes.length === 0){
            throw new Error("Não há solicitações");
        }
        let amigos = [];
        for(const solicitacao of solicitacoes){
            amigos.push(await knex("usuario").select("*").where({id: solicitacao.usuario1_ID}).first());
        }
        amigos = amigos.map(amigo => {
            delete amigo.password;
            return amigo;
        });

        return amigos;
    }catch(erro){
        throw erro;
    }
}

async function adicionarAmigos(id_usuario, email){
    try{
        const amigo = await knex("usuario").select("*").where({email:email}).first();
        if(!amigo){
            throw new Error("Não há perfil com este endereço de email");
        }
        if(amigo.id === id_usuario){
            throw new Error("Não pode se adicionar como amigo");
        }

        amizade = await knex("amizade").select("*").where({usuario1_ID: id_usuario, usuario2_ID: amigo.id}).orWhere({usuario2_ID: id_usuario, usuario1_ID: amigo.id}).first();
        if(amizade){
            if(amizade.status === "P"){
                throw new Error("Solicitação pendente ");
            }
            else{
                throw new Error("Já amigos");
            }
        }

        const solicitacao = {
            status: "P",
            usuario1_ID: id_usuario,
            usuario2_ID: amigo.id
        }
        await knex("amizade").insert(solicitacao);
        
        return "Solicitação enviada";
    }catch(erro){
        throw erro;
    }
}

async function aceitarAmigo(id_usuario, email){
    try{
        const solicitante = await knex("usuario").select("*").where({email:email}).first();
        if(!solicitante){
            throw new Error("Não há usuário com este endereço de email");
        }
        if(solicitante.id === id_usuario){
            throw new Error("Não pode aceitar solicitação de si mesmo");
        }

        const solicitacao = await knex("amizade").select("*").where({usuario2_ID:id_usuario, usuario1_ID:solicitante.id}).first();
        if(!solicitacao){
            throw new Error("Não há solicitações por parte desse usuário");
        }
        if(solicitacao.status === "A"){
            throw new Error("Solicitação já aceita");
        }

        solicitacao.status = "A";
        await knex("amizade").update(solicitacao).where({id:solicitacao.id});

        return "Solicitação aceita";
    }catch(erro){
        throw erro;
    }
}

async function deletarOuRejeitarAmigo(id_usuario, email){
    try{
        const amigo = await knex("usuario").select("*").where({email:email}).first();
        if(!amigo){
            throw new Error("Não há usuário com este endereço de email");
        }
        const amizade = await knex("amizade").select("*").where({usuario1_ID:id_usuario, usuario2_ID:amigo.id}).orWhere({usuario2_ID:id_usuario, usuario1_ID:amigo.id}).first();
        if(!amizade){
            throw new Error("Não existe amizade");
        }
        let msg;
        if(amizade.status === "A"){
            msg = "Amigo excluído";
        }
        else{
            msg = "Solicitação cancelada";
        }
        await knex("amizade").delete().where({id:amizade.id});
        return msg;
    }catch(erro){
        throw erro;
    }
}
module.exports = {
    verAmigos,
    verSolicitacoes,
    adicionarAmigos,
    aceitarAmigo,
    deletarOuRejeitarAmigo
}