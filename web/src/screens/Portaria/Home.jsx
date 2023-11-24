import logo64 from "../../assets/logo64.png"
import { FiUser, FiLogOut, FiClipboard, FiShield, FiBookOpen, FiPenTool, FiX, FiUsers, FiList } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import "./styles.css"
import axios from "axios"
import { useState, useEffect } from "react"

function HomePortaria() {
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
            <div className="content">
                <div className="access">
                    <h1 className="homeTitle">Bem-vindo (a)</h1>
                    <h4 className="homeSubtitle">Gerenciador de saídas S-Gate</h4>
                        <div className="inputAreaPortaria">
                            <h1 style={{color: "#00ADB5"}}>Registro de ocorrência</h1>
                            <div className="inputGroup">
                                <input type="text" placeholder="Tipo de Ocorrência"></input>
                                <input type="text" placeholder="Email do aluno"></input>
                                <input type="text" placeholder="Data"></input>
                                <input type="text" placeholder="Horário"></input>
                                <input type="text" placeholder="Observações"></input>
                                <input type="text" placeholder="Portaria"></input>
                            </div>
                            <button><h2>Registrar</h2></button>
                        </div>
                </div>
                <div className="separatorVertical">
                    <div className="separator">

                    </div>
                </div>
                <div className="notifications">
                    <FiUser size={"60%"} color="#222831"></FiUser>
                    <Link to={"/editarperfil"}><button>Editar perfil</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HomePortaria
