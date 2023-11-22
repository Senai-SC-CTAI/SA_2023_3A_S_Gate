import logo64 from "../../../assets/logo64.png"
import { FiUser, FiLogOut, FiClipboard, FiShield, FiBookOpen, FiPenTool, FiX, FiUsers, FiList } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './styles.css'

function Desabilitar() {
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
            <h1 style={{color: "#FF002E"}}>Desabilitar usuário</h1>
            <input type="text" placeholder="Tipo de usuário"></input>
            <input type="text" placeholder="Email"></input>
            <input type="password" placeholder="Senha de coordenação"></input>
            <button style={{backgroundColor: "#FF002E"}}><h2>Desabilitar</h2></button>
        </div>
      </div>
    </div>
  )
}

export default Desabilitar
