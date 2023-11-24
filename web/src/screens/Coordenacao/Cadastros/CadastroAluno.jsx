import logo64 from "../../../assets/logo64.png"
import { FiUser, FiLogOut, FiClipboard, FiShield, FiBookOpen, FiPenTool, FiX, FiUsers, FiList } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './styles.css'
import { useState } from "react"
import axios from "axios"

function CadastroAluno() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [turma, setTurma] = useState('')
  const [emailResp, setEmailResp] = useState('')
  const [senha, setSenha] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    let novoUsuario = {
    nome: nome,
    email: email,
    senha: senha,
    turma: turma,
    }
    await axios.post('http://localhost:8090/estudantes', novoUsuario);
    setNome('');
    setEmail('');
    setSenha('');
    setTurma('');
    setEmailResp('');
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
            <h1>Cadastro de Aluno</h1>
            <div className="inputGroup">
            <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
            <input type="text" placeholder="Turma" value={turma} onChange={(e) => setTurma(e.target.value)}></input>
            <input type="text" placeholder="Email do responsável" value={emailResp} onChange={(e) => setEmailResp(e.target.value)}></input>
            </div>
            <button onClick={handleSubmit}><h2>Cadastrar</h2></button>
        </div>
      </div>
    </div>
  )
}

export default CadastroAluno
