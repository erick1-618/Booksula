require("dotenv").config();
const bcrypt = require("bcrypt");
const knex = require("../database/index");
const jwt = require("jsonwebtoken")

async function criarUsuario(nome, email, password){
    try{
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

async function lerUsuarios(){
    try{
        const usuarios = await knex("usuario").select("*");
        if(usuarios.length === 0){
            throw new Error("Sem usuários cadastrados");
        }
        return usuarios;
    }catch(erro){
        throw erro;
    }
}

async function lerUsuarioPorId(id){
    try{
        const usuario = await knex("usuario").select("*").where({id: id}).first();
        if(!usuario){
            throw new Error("Não há usuário com esse id");
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
        await knex("usuario").delete().where({id:id});
        return "Usuário Deletado";
    }catch(erro){
        throw erro;
    }
}

async function deleteAll(){
    try{
        await knex("usuario").select("*").delete();
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

module.exports = {
    criarUsuario,
    lerUsuarios,
    lerUsuarioPorId,
    atualizarUsuario,
    deletarUsuario,
    deleteAll,
    login
}