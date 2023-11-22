import logo64 from "../../../assets/logo64.png"
import { FiUser, FiLogOut, FiClipboard, FiShield, FiBookOpen, FiPenTool, FiX, FiUsers, FiList } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
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
      <div className="content">
        <div className="access">
          <h1 className="homeTitle">Bem-vindo (a)</h1>
          <h4 className="homeSubtitle">Gerenciador de saídas S-Gate</h4>
          <div className="panel">

            <div className="panelSlot" style={{gridColumn: "1 2", gridRow: "1 2"}}>
              <Link to={"/cadastrocoord"} className="panelButton" style={{textDecoration: "none"}}>
                <FiClipboard color="#222831" size={"52px"}></FiClipboard>
                <h4 className="accessText">Cadastrar Coordenação</h4>
              </Link>
            </div>
            <div className="panelSlot" style={{gridColumn: "2 3", gridRow: "1 2"}}>
              <Link to={"/cadastroport"}  className="panelButton" style={{textDecoration: "none"}}>
                <FiShield color="#222831" size={"52px"}></FiShield>
                <h4 className="accessText">Cadastrar Portaria</h4>
              </Link>
            </div>
            <div className="panelSlot" style={{gridColumn: "3 4", gridRow: "1 2"}}>
              <Link to={"/cadastroprof"}  className="panelButton" style={{textDecoration: "none"}}>
                <FiBookOpen color="#222831" size={"52px"}></FiBookOpen>
                <h4 className="accessText">Cadastrar Professor</h4>
              </Link>
            </div>
            <div className="panelSlot" style={{gridColumn: "4 5", gridRow: "1 2"}}>
              <Link to={"/cadastroresp"}  className="panelButton" style={{textDecoration: "none"}}>
                <FiUsers color="#222831" size={"52px"}></FiUsers>
                <h4 className="accessText">Cadastrar Responsável</h4>
              </Link>
            </div>

            <div className="separatorHorizontal">
                <div className="separator">
                
                </div>
            </div>

            <div className="panelSlot" style={{gridColumn: "1 2", gridRow: "3 4"}}>
              <Link to={"/cadastroaluno"}  className="panelButton" style={{textDecoration: "none"}}>
                <FiPenTool color="#222831" size={"52px"}></FiPenTool>
                <h4 className="accessText">Cadastrar Aluno</h4>
              </Link>
            </div>
            <div className="panelSlot" style={{gridColumn: "2 3", gridRow: "3 4"}}>
              <Link to={"/desabilitar"}  className="panelButton" style={{textDecoration: "none"}}>
                <FiX color="#222831" size={"52px"}></FiX>
                <h4 className="accessText">Desabilitar Usuário</h4>
              </Link>
            </div>
            <div className="panelSlot" style={{gridColumn: "3 4", gridRow: "3 4"}}>
              <Link to={"/visualizar"}  className="panelButton" style={{textDecoration: "none"}}>
                <FiUsers color="#222831" size={"52px"}></FiUsers>
                <h4 className="accessText">Visualizar Usuários</h4>
              </Link>
            </div>
            <div className="panelSlot" style={{gridColumn: "4 5", gridRow: "3 4"}}>
              <Link to={"/relatorios"}  className="panelButton" style={{textDecoration: "none"}}>
                <FiList color="#222831" size={"52px"}></FiList>
                <h4 className="accessText">Gerar Relatório</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="separatorVertical">
          <div className="separator">

          </div>
        </div>
        <div className="notifications">
          <h4 className="homeSubtitle">Pedidos de Saída Antecipada Pendentes</h4>
        </div>
      </div>
    </div>
  )
}

export default Home
