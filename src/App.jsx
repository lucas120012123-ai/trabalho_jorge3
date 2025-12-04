/*
  Componente principal da aplicação React.

  Este arquivo importa e renderiza dois componentes principais:
  - Navbar: responsável pela barra de navegação do site.
  - CaixaDeMensagem: um componente que recebe uma mensagem do usuário
    e exibe informações sobre ela.
*/


import { useState } from 'react'
import Navbar from "./navbar/navbar";
import CaixaDeMensagem from "./componentes/CaixaDeMensagem";
import './App.css'

function App() {
  

  return (
    <>
    <Navbar/>
    <CaixaDeMensagem />
    </>
  )
}

  

export default App
