import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'
import logo128 from '../../../assets/logo128.png'
import '../styles.css'

function RecuperarSenha2() {

  return (
    <div className='login'>
      <div className="form">
        <h2 style={{ color: "#909090" }}>Recuperação de senha</h2>
        <input type={"text"} placeholder="Código"></input>
        <Link to={"/esqueciasenha3"}><button>Recuperar senha</button></Link>
        <button>Reenviar Código</button>
      </div>
    </div>
  );

}

export default RecuperarSenha2
