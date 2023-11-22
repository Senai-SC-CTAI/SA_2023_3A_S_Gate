import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'
import logo128 from '../../../assets/logo128.png'
import '../styles.css'

function RecuperarSenha1() {

  return (
    <div className="login">
      <div className="form">
        <h2 style={{color: "#909090"}}>Recuperação de senha</h2>
        <input type={"text"} placeholder="Email"></input>
        <Link to={"/esqueciasenha2"}><button>Enviar código</button></Link>
      </div>
      </div>
  );

}

export default RecuperarSenha1
