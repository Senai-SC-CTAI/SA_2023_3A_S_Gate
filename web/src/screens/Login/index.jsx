import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'
import logo128 from '../../assets/logo128.png'
import './login.css'

const logar = async (email, senha) => {
  try {
    const response = await axios.post('http://localhost:8090/api/login', {
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
  const [auth, setAuth] = useState(false);
  const handleLogin = async () => {
    try {
      if (!email || !senha) {
        alert("Campos não podem ser nulos")
      }
      else {
        const response = await logar(email, senha);
        if (response) {
          window.location.href = "/home"
          setAuth(true)
        }
        else {
          alert("Credenciais inválidas")
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
        <button onClick={handleLogin}>Entrar</button>
        <div className="resetPass"><Link to={"/esqueciasenha1"} className='resetPass'>Esqueci a senha</Link></div>
      </div>
    </div>
  );

}

export default Login