import Modal from "../EscreverResenhas/Resenhas";
import Header from "../Header/Header";

import './Feed.css';
import { UserCircle } from "phosphor-react";
import { NotePencil } from "phosphor-react";


function Feed(){
    return(
        <>
            <Header />
            <div className="circulo">
                <img className ="imagem" src="img/Logo.png" alt="logo"/>
            </div>
            
            <button className="botao_feed_perfil">Seu perfil</button>
            <button className="botao_feed_sair">Sair</button>

            <div className='caixão'>
              <UserCircle className="custom-icon1" /> 
              <h1 className='Titulo00'>Nome do Usuário</h1>
              <br></br>
              <br></br>
              <br></br>
              <p className='Titulo02'>Resenhas mais recentes</p>
                <div className='caixa1'>
                  <div className='Nome1'>
                    <h3 className='caixinha'>
                      <UserCircle className="custom-icon" /> Nome do Usuário
                    </h3>
                    <h3 className='data1'>Data da publicação</h3>
                    <h3 className='obra'>Nome da obra</h3>
                  </div>
                  <div className='Previa1'>
                    <h3 className='caixinha'>
                      <NotePencil className="custom-icon" />Prévia da resenha
                    </h3>
                  </div>
                </div>
                {/* Repetição do bloco para outras resenhas */}
                <div className='caixa1'>
                  <div className='Nome1'>
                    <h3 className='caixinha'>
                      <UserCircle className="custom-icon" /> Nome do Usuário
                    </h3>
                    <h3 className='data1'>Data da publicação</h3>
                    <h3 className='obra'>Nome da obra</h3>
                  </div>
                  <div className='Previa1'>
                    <h3 className='caixinha'>
                      <NotePencil className="custom-icon" />Prévia da resenha
                    </h3>
                  </div>
                </div>
                <div className='caixa1'>
                  <div className='Nome1'>
                    <h3 className='caixinha'>
                      <UserCircle className="custom-icon" /> Nome do Usuário
                    </h3>
                    <h3 className='data1'>Data da publicação</h3>
                    <h3 className='obra'>Nome da obra</h3>
                  </div>
                  <div className='Previa1'>
                    <h3 className='caixinha'>
                      <NotePencil className="custom-icon" />Prévia da resenha
                    </h3>
                  </div>
                </div>
              </div>
            
                    {/*<div className="bloco_resenhas">
            <div className="resenha">
                    <div className="nome1">
                        <h3>Nome do Usuário</h3>
                    </div>
                    <div className="obj_dir">
                        <h3>Data da publicação</h3>
                        <h3>Nome da obra</h3>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="previa">
                        <h3>Prévia da resenha</h3>
                    </div>
                    <div className="classif">
                        <h3>Classificação</h3>
                    </div>
                    </div>
            </div>*/}
            <Modal />
            {/*<Modal />
            <button className="botao_feed_perfil">Seu perfil</button>
            <button className="botao_feed_sair">Sair</button>
            <div className="bloco_resenhas"></div>*/}
        </>
    )
}

export default Feed;