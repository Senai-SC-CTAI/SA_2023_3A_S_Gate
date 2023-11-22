import logo64 from "../../../assets/logo64.png"
import { FiUser, FiLogOut, FiClipboard, FiShield, FiBookOpen, FiPenTool, FiX, FiUsers, FiList } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './styles.css'
import { useState } from "react"
import axios from "axios"

function CadastroResp() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [telefone, setTelefone] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    let novoUsuario = {
    nome: nome,
    email: email,
    senha: senha,
    telefone: telefone
    }
    await axios.post('http://localhost:8090/responsaveis', novoUsuario);
    setNome('');
    setEmail('');
    setSenha('');
    setTelefone('');
    } catch (error) {
    console.error('Erro ao criar usuário:', error);
    }
    };


  return (
    <div className='home'>
      <div className="header">
        <img className="logoHeader" src={logo64}></img>
        <div className="profile">
          <button className="quit">
            <FiLogOut color="white" size={"28px"}/> Sair
          </button>
          <FiUser className="FiUser" color="white" size={"32px"}></FiUser>
        </div>
      </div>
      <div className="contentCadastro">
        <div className="inputArea">
            <h1>Cadastro de Responsável</h1>
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="number" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}></input>
            <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
            <button onClick={handleSubmit}><h2>Cadastrar</h2></button>
        </div>
      </div>
    </div>
  )
}

export default CadastroResp
