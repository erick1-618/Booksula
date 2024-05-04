const bcrypt = require("bcrypt");
const knex = require("../database/index");

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

        return "Usuario cadastrado";
    }catch(erro){
        throw erro;
    }
}

module.exports = {
    criarUsuario
}