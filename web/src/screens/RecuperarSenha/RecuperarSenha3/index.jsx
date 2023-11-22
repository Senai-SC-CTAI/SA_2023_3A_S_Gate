import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'
import '../styles.css'

function RecuperarSenha3() {

  return (
    <div className="login">
      <div className="form">
        <h2 style={{ color: "#909090" }}>Recuperação de senha</h2>
        <input type={"password"} placeholder="Nova senha"></input>
        <input type={"password"} placeholder="Confirmar senha"></input>
        <Link to={"/"}><button>Recuperar senha</button></Link>
      </div>
      </div>
  );

}

export default RecuperarSenha3
