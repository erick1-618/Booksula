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
            resenhas.push(await knex("resenha").select("*").where({id: resFav.resenha_id}));
        }

        resenhas = resenhas.map(resenha => {
            delete resenha.conteudo;
            delete resenha.nota;
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
    criarUsuario,
    lerUsuarioPorId,
    atualizarUsuario,
    deletarUsuario,
    login,
    favoritarResenha,
    verResenhasFavoritadas,
    excluirDosFavoritos
}