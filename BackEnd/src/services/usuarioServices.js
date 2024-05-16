require("dotenv").config();
const bcrypt = require("bcrypt");
const knex = require("../database/index");
const jwt = require("jsonwebtoken");
const validator = require("validator");

function validarNomeUsuario(nome){
    const regex = /^[a-zA-Z0-9_]{3,16}$/;
    return regex.test(nome);
}

async function criarUsuario(nome, email, password){
    try{
        const jaExisteUsuario = await knex("usuario").select("*").where({email: email}).first();
        if(jaExisteUsuario){
            throw new Error("Já existe usuário com esse endereço de email");
        }
        if(nome === "" || email === "" || password === ""){
            throw new Error("Preencha todos os campos obrigatórios");
        }
        if(!(validator.isEmail(email))){
            throw new Error("Insira um email válido");
        }
        if(!(validarNomeUsuario(nome))){
            throw new Error("O nome de usuário deve conter apenas letras, números e (_). Deve ter no mínimo 3 e máximo 16 caracteres");
        }
        if(!validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
            returnScore: false
        })){
            throw new Error("A senha deve conter no mínimo 8 caracteres, uma letra maiúscula e uma minúscula, um símbolo e um número");
        }

        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);
        const usuario = {
            nome: nome,
            email: email,
            password: hash
        }
        await knex("usuario").insert(usuario);
        console.log('serviço acessado');
        return "Usuario cadastrado";
    }catch(erro){
        throw erro;
    }
}

async function lerUsuarioPorId(id){
    try{
        const isUser = await knex("usuario").select("*").where({id: id}).first();
        if(!isUser){
            throw new Error("Não há usuário com esse id");
        }
        const usuario = {
            nome: isUser.nome,
            email: isUser.email
        }

        return usuario;
    }catch(erro){
        throw erro;
    }
}

async function atualizarUsuario(id, nome, email, password){
    try{
        const usuario = await knex("usuario").select("*").where({id: id}).first();
        if(!usuario){
            throw new Error("Não há usuário com esse id");
        }
        let hash;
        if(password){
            const salt = bcrypt.genSaltSync();
            hash = bcrypt.hashSync(password, salt);
        }
        const usuarioAtualizado = {
            nome: nome,
            email: email,
            password: hash
        }
        await knex("usuario").update(usuarioAtualizado).where({id:id});
        return "Informações Atualizadas";
    }catch(erro){
        throw erro;
    }
}

async function deletarUsuario(id){
    try{
        const usuario = await knex("usuario").select("*").where({id: id}).first();
        if(!usuario){
            throw new Error("Não há usuário com esse id");
        }
        await knex("amizade").delete().where({usuario1_ID: id}).orWhere({usuario2_ID: id}); //Deletar todos as amizades desse usuário;
        await knex("usuario").delete().where({id:id});
        
        return "Usuário Deletado";
    }catch(erro){
        throw erro;
    }
}

async function login(email, password){
    try{
        const usuario = await knex("usuario").select("*").where({email:email}).first();
        if(!usuario){
            throw new Error("Usuário não existe");
        }
        const senhaCorreta = bcrypt.compareSync(password, usuario.password);
        if(!senhaCorreta){
            throw new Error("Senha incorreta");
        }
        const info = {
            id: usuario.id,
            nome: usuario.nome
        }

        const token = jwt.sign(info, process.env.JWT_KEY, {expiresIn: '24h'});
        return token;

    }catch(erro){
        throw erro;
    }
}

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
    criarUsuario,
    lerUsuarioPorId,
    atualizarUsuario,
    deletarUsuario,
    login,
    verAmigos,
    verSolicitacoes,
    adicionarAmigos,
    aceitarAmigo,
    deletarOuRejeitarAmigo
}