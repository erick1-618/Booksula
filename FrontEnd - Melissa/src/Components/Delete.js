import React from  'react'

export default function Delete ({closeModal}) {
    return (
        <>
        <>
            </>
            <>
                <div id="modald" className='fundomodal' style={{
                    backgroundColor: "rgba(0,0,0,.7)",
                    opacity: 30,
                    width: 1300,
                    height: 1000,
                    zIndex: 99,
                    alignItems: 'center',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    transform: 'translate (-50,-50)',
                    display: 'none',
                }}>

                    <div id="modaldelete" className="modaldelete">
                        <div className="delete2" style={{
                            left: 420,
                            top: 200,
                            zIndex: 40,
                            backgroundColor: "#fff",
                            maxWidth: 600,
                            width: 301,
                            height: 101,
                            padding: 35,
                            borderRadius: 0.5,
                            fontSize: 15,
                            backgroundColor: "#E6DCEE",
                            color: "#342243",
                            alignItems: 'center',
                            position: 'fixed',
                            borderRadius: 1,
                        }}>
                            <h3>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <u>
                                    <b>Deseja deletar a sua conta?</b>
                                </u>
                            </h3>
                            <button
                                id="closemodal" className="closemodal" onClick={() => closeModal(false)} 
                                style={{
                                    backgroundColor: "#342243",
                                    color: "#E6DCEE",
                                    borderRadius: "1rem",
                                    padding: "0.7rem"
                                }}
                            >
                                <b>Não, cancelar</b>
                            </button>
                            <button
                                id="deletar" className="deleteaccount"
                                style={{
                                    backgroundColor: "#342243",
                                    color: "#E6DCEE",
                                    borderRadius: "1rem",
                                    padding: "0.7rem"
                                }}
                            >
                                <b>Sim, deletar minha conta</b>
                            </button>
                        </div>
                    </div>
                </div>
                </>
                </>
                )}