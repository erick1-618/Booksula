import React, { useState } from 'react';

export default function Username() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <>
        <i
          className="bx bx-user-circle"
          style={{ fontSize: 65, position: "relative", marginLeft: 20 }}
        />
        <u>Nome de usuário</u>
      </>
      <button
        style={{
          backgroundColor: "#E6DCEE",
          fontWeight: "bold",
          borderRadius: "1.5rem",
          marginLeft: 300,
          fontSize: 17,
          padding: "0.5rem",
          paddingLeft: "0.8rem",
          paddingRight: "0.8rem",
          cursor:'pointer',
        }}
        onClick={openModal}
      >
        Editar perfil
        <br />
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal1">
            <span className="close1" onClick={closeModal}>&times;</span>
            <h2>Editar Perfil</h2>
            <label htmlFor="newName">Novo nome:</label>
            <input type="text" id="newName" name="newName" /><br />
            <label htmlFor="newPassword">Nova senha:</label>
            <input type="password" id="newPassword" name="newPassword" /><br />
            <label htmlFor="newEmail">Novo e-mail:</label>
            <input type="email" id="newEmail" name="newEmail" /><br />
            <button style={{cursor:'pointer',borderRadius:10,backgroundColor:"#342243",color:"#E6DCEE",}} onClick={closeModal}>Cancelar</button>
            <button style={{cursor:'pointer', borderRadius:10,backgroundColor:"#342243",color:"#E6DCEE",}} >Salvar Alterações</button>
          </div>
        </div>
      )}
    </>
  );
}