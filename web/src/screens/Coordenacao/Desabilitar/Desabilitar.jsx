import logo64 from "../../../assets/logo64.png"
import { FiUser, FiLogOut, FiClipboard, FiShield, FiBookOpen, FiPenTool, FiX, FiUsers, FiList } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './styles.css'
import { useState, useEffect } from "react"
import axios from "axios"

function Desabilitar() {
  const [usuarios, setUsuarios] = useState([])
  const [email, setEmail] = useState('')
  const [tipo, setTipo] = useState('')

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get(`http://localhost:8090/${tipo}`);
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  }

  const handleInput = () => {
    usuarios.forEach(u => {
      if (u.email == email) {
        handleDelete(u)
      }
    });
  }

  const handleDelete = async (u) => {
    try {
      let id = 0
      if (tipo == "coordenacao") id = u.idCoordenacao
      else if (tipo == "portaria") id = u.idPortaria
      else if (tipo == "estudantes") id = u.idEstudante
      else if (tipo == "professores") id = u.idProfessor
      else if (tipo == "responsaveis") id = u.idResponsavel
      await axios.delete(`http://localhost:8090/${tipo}/${id}`);
      alert("Excluído com sucesso")
      setEmail('')
    } catch (error) {
      console.error('Erro ao excluir usuario:', error);
      alert("Erro ao excluir usuario")
    }
  };

  return (
    <div className='home'>
      <div className="header">
        <img className="logoHeader" src={logo64}></img>
        <div className="profile">
          <button className="quit">
            <FiLogOut color="white" size={"28px"} /> Sair
          </button>
          <FiUser className="FiUser" color="white" size={"32px"}></FiUser>
        </div>
      </div>
      <div className="contentCadastro">
        <div className="inputArea">
          <h1 style={{ color: "#FF002E" }}>Desabilitar usuário</h1>
          <select placeholder="Tipo de Usuário" value={tipo} onChange={(e) => {
            setTipo(e.target.value)
          }
          }
          defaultValue={""}>
            <option value="">Escolher tipo de usuario</option>
            <option value="coordenacao">Coordenação</option>
            <option value="portaria">Portaria</option>
            <option value="estudantes">Estudantes</option>
            <option value="professores">Professores</option>
            <option value="responsaveis">Responsáveis</option>
          </select>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <button style={{ backgroundColor: "#FF002E" }} onClick={() => {
            fetchUsuarios()
            handleInput()}
            }><h2>Desabilitar</h2></button>
        </div>
      </div>
    </div>
  )
}

export default Desabilitar
