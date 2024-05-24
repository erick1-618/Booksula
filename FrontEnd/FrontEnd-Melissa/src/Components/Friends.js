import React, { useState } from 'react';

function Friends() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleAcceptRequest = () => {
    alert("Solicitação aceita");
  };

  return (
    <div className="friendsofc">

      
      {modalOpen && (
        <div id="modalfriends" className="modal-friends">
          <button className="close-button" onClick={handleToggleModal}>X</button>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Amigos</b></h2>
          <div id="amigo1" className="amigo1">
            <i className="bx bx-user-circle" style={{ fontSize: 30 }} /> Nome do usuário
          </div>
          
          <a href="#" className="amigo2" style={{color:"#E6DCEE",}}>
            <i className="bx bx-user-circle" style={{ fontSize: 30 }} /> Nome do usuário
          </a>
          <br />
          <a href="#" className="amigo3" style={{color:"#E6DCEE",}}>
            <i className="bx bx-user-circle" style={{ fontSize: 30 }} /> Nome do usuário
          </a>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Solicitações</h2>
          <a href="#" className="solicitacao1" style={{color:"#E6DCEE",}}>
            <i className="bx bx-user-circle" style={{ fontSize: 30 }} /> Nome do usuário
          </a>
          <button className="botaoaceitar1" onClick={handleAcceptRequest}>
            <b>Aceitar</b>
          </button>
          <br />
          <a href="#" className="solicitacao2" style={{color:"#E6DCEE",}}>
            <i className="bx bx-user-circle" style={{ fontSize: 30 }} /> Nome do usuário
          </a>
          <button className="botaoaceitar2" onClick={handleAcceptRequest}>
            <b>Aceitar</b>
          </button>
        </div>
      )}
      <button className="amigos" onClick={handleToggleModal}>
        &nbsp;&nbsp;&nbsp;Amigos <i className="bx bxs-user-detail" />
      </button>
    </div>
  );
}

export default Friends;

