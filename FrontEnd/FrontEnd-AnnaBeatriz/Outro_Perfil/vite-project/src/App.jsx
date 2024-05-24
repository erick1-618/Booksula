import { useState } from 'react';
import './App.css';
import React from 'react';

//img
import logo from './img/logo.png';
// icons
import { FaRegUserCircle } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";


function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

 

  return (
    <>
      <div className='geral'>

      <div className='NaveBar'>
      <img className='Logo' src={logo} alt="Logo" />
      </div>

        <button className='button-20'>Sair</button>
            
              <div className='caixão'>
              <FaRegUserCircle className="custom-icon1" /> 
              <h1 className='Titulo00'>Nome do Usuário</h1>
              <h3 className='Titulo01'>Biografia</h3>
              <p className='Titulo02'>Resenhas mais recentes</p>
                <div className='caixa1'>
                  <div className='Nome1'>
                    <h3 className='caixinha'>
                      <FaRegUserCircle className="custom-icon" /> Nome do Usuário
                    </h3>
                    <h3 className='data1'>Data da publicação</h3>
                    <h3 className='obra'>Nome da obra</h3>
                    <h3 className='classi'>Classificação</h3>
                  </div>
                  <div className='Previa1'>
                    <h3 className='caixinha'>
                      <BsPencilSquare className="custom-icon" />Prévia da resenha
                    </h3>
                  </div>
                </div>
                {/* Repetição do bloco para outras resenhas */}
                <div className='caixa1'>
                  <div className='Nome1'>
                    <h3 className='caixinha'>
                      <FaRegUserCircle className="custom-icon" /> Nome do Usuário
                    </h3>
                    <h3 className='data1'>Data da publicação</h3>
                    <h3 className='obra'>Nome da obra</h3>
                    <h3 className='classi'>Classificação</h3>
                  </div>
                  <div className='Previa1'>
                    <h3 className='caixinha'>
                      <BsPencilSquare className="custom-icon" />Prévia da resenha
                    </h3>
                  </div>
                </div>
                <div className='caixa1'>
                  <div className='Nome1'>
                    <h3 className='caixinha'>
                      <FaRegUserCircle className="custom-icon" /> Nome do Usuário
                    </h3>
                    <h3 className='data1'>Data da publicação</h3>
                    <h3 className='obra'>Nome da obra</h3>
                    <h3 className='classi'>Classificação</h3>
                  </div>
                  <div className='Previa1'>
                    <h3 className='caixinha'>
                      <BsPencilSquare className="custom-icon" />Prévia da resenha
                    </h3>
                  </div>
                </div>
              </div>
           
              </div>
      
    
    </>
  );
}

export default Home;