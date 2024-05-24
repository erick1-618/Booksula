import './AppMelissa.css';
import { BiFullscreen, BiSolidUserCircle } from "react-icons/bi";
import { BiImageAdd } from "react-icons/bi";
import Header from './Components/Header';
import Username from './Components/Username';
import Edit from './Components/Edit';
import Options from './Components/Options';
import Fav from './Components/Fav';
import ModalEd from './Components/Modaled';
import Delete from './Components/Delete';
import Friends from './Components/Friends';
import { useState } from 'react';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeleteAccount = () => {
    alert('Conta deletada com sucesso!');
    closeModal();
  };

  function handleSearch(){
    alert ("Sair")
  }

      return (
    <>
    <>
    <div className="App">
      <Header/>
    </div>
      <body>
      </body>


      <nav>
        <ul>
      <div className="App" >
      <div className="Appheader" >
      
        <button onClick={openModal} style={{
            display: "inline",
            margin: "0 100",
            marginTop:1,
            marginLeft:465,
            borderRadius: "5rem",
            backgroundColor: "#2d0446",
            color: "#fff",
            padding: ".4rem 3.5rem",
            cursor: "pointer",
            fontSize: "1.0rem",
            position: "sticky",
            top: "100",
            fontFamily: "Arial, Helvetica, sans-serif",
            boxShadow: "0 .1rem 1rem rgba(0,0,0,.1)",
          }}>Delete sua conta </button>

        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <p style={{fontSize:20,}}>Deseja deletar sua conta?</p>
              <button onClick={handleDeleteAccount}style={{
 backgroundColor: "#342243",
 color: "#E6DCEE",
 borderRadius: "1rem",
padding: "0.7rem"
              }}>Sim, excluir</button>
              <button onClick={closeModal} style={{
   backgroundColor: "#342243",
   color: "#E6DCEE",
   borderRadius: "1rem",
   padding: "0.7rem"
              }}>Não, cancelar</button>
            </div>
          </div>
        )}

<button id="buttonSair" onClick={handleSearch} style={{
            display: "inline",
            margin: "0 30px",
            borderRadius: "5rem",
            backgroundColor: "#2d0446",
            color: "#fff",
            padding: ".4rem 3.5rem",
            cursor: "pointer",
            fontSize: "1.0rem",
            position: "sticky",
            top: "0",
            fontFamily: "Arial, Helvetica, sans-serif",
            boxShadow: "0 .1rem 1rem rgba(0,0,0,.1)",
          }} >
              Sair
          </button>
      </div>
    </div>
    </ul>
    </nav>

      
      <h1 style={{marginLeft:35,marginTop:45,}}>Página do usuário</h1>
      <div class="nomedeusuario">
      <BiSolidUserCircle size={80} color="#fff" />
      <Username />
      <br/>
      <br/>
      <Fav/>
      <Options />
      <Friends/>
      </div>

      <ModalEd />
      <Delete/>
      
       </>
      </>
        )
        }

  export default App