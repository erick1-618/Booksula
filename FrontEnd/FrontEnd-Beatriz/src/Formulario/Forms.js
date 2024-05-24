import React, {useState} from 'react';
import './Forms.css';
import Image from './Logo/Image';
import { UserCircle } from "phosphor-react";
import { At } from "phosphor-react";
import { LockSimple } from "phosphor-react";

function Forms(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cadastros, setCadastro] = useState([]);

    function onSave(e){
        e.preventDefault();
        console.log(nome, email, senha);

        //guardar os dados necessários do cadastro
        const newCadastro = {nome, email, senha};
        setCadastro([...cadastros, newCadastro]);
        localStorage.setItem('cadastros', JSON.stringify([...cadastros, newCadastro]));
        //limpar o forms
        setNome('');
        setEmail('');
        setSenha('');
    }

    return(
        <div>
            <Image />
            <form onSubmit={onSave}>
                <section  className="forms">
                    <h1 id="titulo">Criar conta</h1>
                    <hr id="linha"></hr>
                    <br></br>
                    <h2 className='subtitulo'>Preencha seus dados com as informações abaixo:</h2>
                    <br></br>
                    <br></br>
                    <div>
                    <input 
                        type="text" 
                        className="display" 
                        placeholder=" Nome do usuário" 
                        required="required"
                        value={nome}
                        onChange={(e) =>{
                            setNome(e.target.value)
                        }}/>
                        <UserCircle size={32} className='icons'/>
                    </div>

                    <br></br>

                    <div>
                    <input 
                        type="text" 
                        className="display" 
                        placeholder=" E-mail" 
                        required="required"
                        value={email}
                        onChange={(e) =>{
                            setEmail(e.target.value)
                        }}/>
                        <At size={32} className='icons'/> {/* Aqui você pode ajustar o tamanho do ícone */}
                    </div>

                    <br></br>
                    <div>
                    <input 
                        type="password" 
                        className="display" 
                        placeholder=" Senha" 
                        required="required"
                        value={senha}
                        onChange={(e) =>{
                            setSenha(e.target.value)
                        }}/>
                        <LockSimple size={32} className='icons'/>
                    </div>

                    <br></br>

                    <input type="submit" className="botao_cadastrar" value="Cadastrar"/>

                </section>
            </form>
        </div>
    )
}

export default Forms;