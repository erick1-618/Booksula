import React, { useState } from "react";
import './Modal.css';

function Modal(){
    const [modal, setModal] = useState(false);
    const [obra, setObra] = useState('');
    const [autor, setAutor] = useState('');
    const [nota, setNota] = useState('');
    const [resenha, setResenha] = useState('');
    const [postagem, setPostagem] = useState ([]);

    function onSave(e) {
        e.preventDefault();
        
        // Criar um objeto NewPostagem
        const newPostagem = { obra, autor, nota, resenha };
        console.log(newPostagem);

        // Atualizar o estado e o armazenamento local com uma nova postagem
        const updatedPostagem = [...postagem, newPostagem];
        setPostagem(updatedPostagem);
        localStorage.setItem('postagem', JSON.stringify(updatedPostagem));
        
        // Limpar o forms
        setObra('');
        setAutor('');
        setNota('');
        setResenha('');
        
        // Fechar o modal
        toggleModal(false);
    }


    const toggleModal = () =>{
        setModal(!modal);
    }

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

    return(
        <>
        <button onClick={toggleModal} className="abrir_resenha">Escreva sua resenha</button>

        {modal && (
        <div className="modal">
            <div className="overlay" onClick={toggleModal}></div>
            <div className="conteudo_modal">
                <form onSubmit={onSave}>
                <h2>Escreva sua resenha aqui!</h2>
                <br></br>
                <p>Nome da obra:</p>
                <br></br>
                <input type="text" 
                        className="display_modal"  
                        required="required"
                        value={obra}
                        onChange={(e) =>{
                            setObra(e.target.value)
                        }}
                />
                <p>Nome do autor da obra:</p>
                <br></br>
                <input type="text" 
                        className="display_modal"     
                        required="required"
                        value={autor}
                        onChange={(e) =>{
                            setAutor(e.target.value)
                        }}
                />
                <p>Nota/Classificação:</p>
                <br></br>
                <input type="text" 
                        className="display_modal" 
                        required="required"
                        value={nota}
                        onChange={(e) =>{
                            setNota(e.target.value)
                        }}
                />
                <p>Resenha:</p>
                <br></br>
                <input type="text" 
                        className="display_modal" 
                        required="required"
                        value={resenha}
                        onChange={(e) =>{
                            setResenha(e.target.value)
                        }}
                />
                    <button type="submit" className="postar_resenha">Postar</button>
                </form>
            </div>
        </div>
        )}
        </>
    )
}

export default Modal;