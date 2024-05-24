import { useState } from 'react';
import './Login.css';

//icone
import { FaRegUserCircle } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
//img
import logo from './img/Logo.png';


function Login() {
  const [count, setCount] = useState(0)
  

  return (
    <>

<img className='logo' src={logo} alt="logo" />

     <form className='Formulário' action="">
       
      



      <h1 className="Login-titulo">Login</h1>
      <input className="E-mail" type="text" placeholder="E-mail"/><FaRegUserCircle  className='Icone'/>
      <br />
       <br />
       <input className="Senha" type="password" placeholder="Senha"/> <FiAtSign className='Icone' />
       <br />
      <br />
      <button>Entrar</button>
      <div className="div2">
        <a className="cadastro" href="">Cadastre-se</a>
        <a className="esqueceu" href="">Esqueceu a senha?</a>
        
    </div>
    </form>
     
   
     
    </>
  )
}

export default Login
