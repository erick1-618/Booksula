import React, { useState } from 'react';

export default function Fav() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="botaooficialfav">
      <button className="resenhasfav1" onClick={openModal}>
        &nbsp;&nbsp;&nbsp;Resenhas favoritas <i className="bx bxs-heart" />{" "}
      </button>

      {modalOpen && (
        <div className="modal-overlay">
          <div id="modalresenhasfav" className="modal-fav">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>
              <b>Você favoritou:</b>
            </h2>
            <div className="box">
              <p>
                <i className="bx bxs-book" style={{ fontSize: 20 }} />
                &nbsp;&nbsp;&nbsp;&nbsp;Nome da resenha - Autor(a)
              </p>
              <div className="previadaresenha">
                &nbsp;&nbsp;&nbsp;&nbsp;Prévia da resenha
              </div>
              <div className="nota">&nbsp;&nbsp;&nbsp;&nbsp;Nota do usuário</div>
              <br />
              <nav>
                <a href="#" className="comentarios" style={{ color: "#E6DCEE" }}>
                  Comentários
                </a>
                <a href="#" className="escrevacoment" style={{ color: "#E6DCEE" }}>
                  Escreva um comentário
                </a>
              </nav>
            </div>
            <br />
            <br />
            <div className="box2">
              <p>
                <i className="bx bxs-book" style={{ fontSize: 20 }} />
                &nbsp;&nbsp;&nbsp;&nbsp;Nome da resenha - Autor(a)
              </p>
              <div className="previadaresenha2">
                &nbsp;&nbsp;&nbsp;&nbsp;Prévia da resenha
              </div>
              <div className="nota2">&nbsp;&nbsp;&nbsp;&nbsp;Nota do usuário</div>
              <br />
              <nav>
                <a href="#" className="comentarios2" style={{ color: "#E6DCEE" }}>
                  Comentários
                </a>
                <a href="#" className="escrevacoment2" style={{ color: "#E6DCEE" }}>
                  Escreva um comentário
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
