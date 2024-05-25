import React, { useState } from 'react';

function ModalComments() {
    const [modalOpen, setModalOpen] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false); // Novo estado

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        if (modalOpen) {
            setShowComments(true); // Mostrar comentários quando o modal fechar
        }
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
                        <textarea className='areaTexto'
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
            {showComments && ( // Renderizar os comentários apenas quando showComments for true
                <div className="comments">
                    <h3>Comentários</h3>
                    {comments.map((comment, index) => (
                        <p key={index} className='comment'>{comment}</p>                   
                    ))}
                </div>
            )}
        </div>
    );
}

export default ModalComments;
