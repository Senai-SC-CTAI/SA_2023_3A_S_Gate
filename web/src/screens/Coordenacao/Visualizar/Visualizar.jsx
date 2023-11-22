import logo64 from "../../../assets/logo64.png"
import { FiUser, FiLogOut, FiClipboard, FiShield, FiBookOpen, FiPenTool, FiX, FiUsers, FiList } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './styles.css'

function Visualizar() {
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
            <div className="contentVisualizar">
                <div className="marginContent">
                    <h1 style={{color: "#222831"}}>Listagem de alunos</h1>
                    <input type="text" placeholder="Turma"></input>
                    <button>Listar</button>
                    <div className="listHeader">
                        <p style={{gridColumnStart: 1, gridRowStart: 1}}>Nome</p>
                        <p style={{gridColumnStart: 2, gridRowStart: 1}}>Responsável</p>
                        <p style={{gridColumnStart: 3, gridRowStart: 1}}>Atrasos</p>
                        <p style={{gridColumnStart: 4, gridRowStart: 1}}>Saídas</p>
                        <div className="separadorLista"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visualizar
