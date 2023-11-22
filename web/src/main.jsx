import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './screens/Coordenacao/Home/index.jsx';
import Login from './screens/Login/index.jsx';
import RecuperarSenha1 from './screens/RecuperarSenha/RecuperarSenha1';
import RecuperarSenha2 from './screens/RecuperarSenha/RecuperarSenha2';
import RecuperarSenha3 from './screens/RecuperarSenha/RecuperarSenha3';
import CadastroCoord from './screens/Coordenacao/Cadastros/CadastroCoord.jsx';
import CadastroAluno from './screens/Coordenacao/Cadastros/CadastroAluno.jsx';
import CadastroResp from './screens/Coordenacao/Cadastros/CadastroResp.jsx';
import CadastroPort from './screens/Coordenacao/Cadastros/CadastroPort.jsx';
import CadastroProf from './screens/Coordenacao/Cadastros/CadastroProf.jsx';
import Desabilitar from './screens/Coordenacao/Desabilitar/Desabilitar.jsx';
import Visualizar from './screens/Coordenacao/Visualizar/Visualizar.jsx';
import Relatorios from './screens/Coordenacao/Relatorios/Visualizar.jsx';
import HomePortaria from './screens/Portaria/Home.jsx';
import EditarPerfil from './screens/Portaria/EditarPerfil.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/esqueciasenha1",
    element: <RecuperarSenha1 />,
  },
  {
    path: "/esqueciasenha2",
    element: <RecuperarSenha2 />,
  },
  {
    path: "/esqueciasenha3",
    element: <RecuperarSenha3 />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cadastrocoord",
    element: <CadastroCoord />,
  },
  {
    path: "/cadastroaluno",
    element: <CadastroAluno />,
  },
  {
    path: "/cadastroresp",
    element: <CadastroResp />,
  },
  {
    path: "/cadastroport",
    element: <CadastroPort />,
  },
  {
    path: "/cadastroprof",
    element: <CadastroProf />,
  },
  {
    path: "/desabilitar",
    element: <Desabilitar />,
  },
  {
    path: "/visualizar",
    element: <Visualizar />,
  },
  {
    path: "/relatorios",
    element: <Relatorios />,
  },
  {
    path: "/portaria",
    element: <HomePortaria />,
  },
  {
    path: "/editarperfil",
    element: <EditarPerfil />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
