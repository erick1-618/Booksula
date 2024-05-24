import './Usuario.css';
import React from 'react';

//img
import Image from '../Logo/Image';
// icons
import { UserCircle } from "phosphor-react";
import { NotePencil } from "phosphor-react";


function UserResenhas() {
  return (
    <>
      <div className='geral'>
      <div className='NaveBar'>
      <Image/>
      </div>

        <button className='button-20'>Sair</button>
            
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
                  <div className='classific'>
                    <h3>Classificação</h3>
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
                  <div className='classific'>
                    <h3>Classificação</h3>
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
                  <div className='classific'>
                    <h3>Classificação</h3>
                  </div>
                </div>
              </div>
           
              </div>
    </>
  );
}

export default UserResenhas;