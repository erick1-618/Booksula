import Modal from "./EscreverResenhas/Resenhas";
import Header from "./Header/Header";
import ModalComments from "./ModalComentarios/ModalCom";

import './Feed.css';
import './ModalComentarios/ModalCom.css';
import { UserCircle } from "phosphor-react";
import { NotePencil } from "phosphor-react";
import { Heart } from "phosphor-react";

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
              <br></br>
                <div className='caixa1'>
                  <div className='Nome1'>
                    <h3 className='caixinha'>
                      <UserCircle className="custom-icon" /> Nome da Resenha - Autor(a)
                    </h3>
                    <div className="user">
                      <h3>Por: usuário</h3>
                    </div>
                    <h3 className='data1'>Data da publicação</h3>
                    <h3 className='obra'>Nome da obra</h3>
                  </div>
                  <div className='Previa1'>
                    <h3 className='caixinha'>
                      <NotePencil className="custom-icon" />Prévia da resenha
                    </h3>
                    <br></br>
                    <br></br>
                    <div className="nota">
                      <h3>Nota do usuário: </h3>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="botoes_icons">
                    <button className="comentarios">Comentários</button>
                    <Heart className="heart" size={70} />             
                  </div>
                  <ModalComments/>                  
                </div>
                {/* Repetição do bloco para outras resenhas */}
                <div className='caixa1'>
                  <div className='Nome1'>
                    <h3 className='caixinha'>
                      <UserCircle className="custom-icon" /> Nome da Resenha - Autor(a)
                    </h3>
                    <div className="user">
                      <h3>Por: usuário</h3>
                    </div>
                    <h3 className='data1'>Data da publicação</h3>
                    <h3 className='obra'>Nome da obra</h3>
                  </div>
                  <div className='Previa1'>
                    <h3 className='caixinha'>
                      <NotePencil className="custom-icon" />Prévia da resenha
                    </h3>
                    <br></br>
                    <br></br>
                    <div className="nota">
                      <h3>Nota do usuário: </h3>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="botoes_icons">
                    <button className="comentarios">Comentários</button>
                    <Heart className="heart" size={70} />             
                  </div>
                  <ModalComments/>                  
                </div>
                <div className='caixa1'>
                  <div className='Nome1'>
                    <h3 className='caixinha'>
                      <UserCircle className="custom-icon" /> Nome da Resenha - Autor(a)
                    </h3>
                    <div className="user">
                      <h3>Por: usuário</h3>
                    </div>
                    <h3 className='data1'>Data da publicação</h3>
                    <h3 className='obra'>Nome da obra</h3>
                  </div>
                  <div className='Previa1'>
                    <h3 className='caixinha'>
                      <NotePencil className="custom-icon" />Prévia da resenha
                    </h3>
                    <br></br>
                    <br></br>
                    <div className="nota">
                      <h3>Nota do usuário: </h3>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className="botoes_icons">
                    <button className="comentarios">Comentários</button>
                    <Heart className="heart" size={70} />             
                  </div>
                  <ModalComments/>                  
                </div>
              </div>
            <Modal />            
        </>
    )
}

export default Feed;