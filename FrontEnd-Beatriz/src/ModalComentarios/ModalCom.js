import React, { useState } from 'react';

function ModalComments() {
    const [modalOpen, setModalOpen] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
  
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
  
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };
  
    const handleCommentSubmit = () => {
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment('');
            toggleModal();
        }
    };
  
    return (
        <div>
            <button className='botao_comentario' onClick={toggleModal}>Escreva um comentário</button>
            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Adicionar Comentário</h2>
                        <textarea 
                            placeholder="Escreva seu comentário aqui..." 
                            rows="4" 
                            cols="50" 
                            value={comment}
                            onChange={handleCommentChange}
                        ></textarea>
                        <button className='button-20' onClick={handleCommentSubmit}>Enviar</button>
                        <button className='button-20' onClick={toggleModal}>Fechar</button>
                    </div>
                </div>
            )}
            <div className="comments">
                {comments.map((comment, index) => (
                    <p key={index}>{comment}</p>
                ))}
            </div>
        </div>
    );
}

export default ModalComments;
