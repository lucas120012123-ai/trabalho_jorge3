/*
  Componente principal da aplicação React.

  Este arquivo importa e renderiza dois componentes principais:
  - Navbar: responsável pela barra de navegação do site.
  - CaixaDeMensagem: um componente que recebe uma mensagem do usuário
    e exibe informações sobre ela.

  A estrutura do App é simples e direta: dentro do fragmento (<></>),
  os componentes são organizados na ordem em que aparecem na interface.

  Também é importado o arquivo App.css para aplicar os estilos gerais
  da aplicação.

  Este componente funciona como o núcleo da aplicação,
  coordenando o que será exibido na tela.
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
