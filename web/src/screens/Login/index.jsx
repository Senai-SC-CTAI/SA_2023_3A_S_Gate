import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'
import logo128 from '../../assets/logo128.png'
import './login.css'

const logar = async (email, senha, tipo) => {
  try {
    const response = await axios.post(`http://localhost:8090/api/login${tipo}`, {
      email: email,
      senha: senha,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const handleLogin = async (tipo) => {
    try {
      if (!email || !senha) {
        alert("Campos não podem ser nulos")
      }
      else {
        const response = await logar(email, senha, tipo);
        if (response) {
          if (tipo == "coordenacao") {
            window.location.href = "/home"
           }
           else {
            window.location.href = "portaria"
           } 
        }
      }
    } catch (error) {
      console.error('Erro ao se logar:', error);
    }
  };

  return (
    <div className='login'>
      <div className="form">
        <img src={logo128}></img>
        <input type={"text"} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type={"password"} placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
        <button className="loginButton" onClick={() => handleLogin("coordenacao")}>Entrar como coordenação</button>
        <button className="loginButton" onClick={() => handleLogin("portaria")}>Entrar como portaria</button>
        <div className="resetPass"><Link to={"/esqueciasenha1"} className='resetPass'>Esqueci a senha</Link></div>
      </div>
    </div>
  );

}

export default Login