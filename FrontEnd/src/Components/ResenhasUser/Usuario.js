import './Usuario.css';
import Header from '../Header/Header';


function UserResenha(){
    return(
        <>
            <Header />
            <div className="circulo">
                <img className ="imagem" src="img/Logo.png" alt="logo"/>
            </div>
            <button className="botao_feed_sair">Sair</button>
            <div className="bloco_resenhas">
                <h1>Nome do Usuário</h1>
                <hr className="linha"></hr>
                <br></br>
                <h2>Resenhas mais recentes</h2>
                <div className="resenha">
                    <div className="nome1">
                        <h3>Nome do Usuário</h3>
                    </div>
                    <div className="obj_dir">
                        <h3>Data da publicação</h3>
                        <h3>Nome da obra</h3>
                    </div>
                    <br></br>
                    {/*<div className="previa_classif">
                        <h3>Prévia da resenha</h3>
                        <h3>Classificação</h3>
                    </div>*/}
                </div>
            </div>
        </>
    )
}

export default UserResenha;