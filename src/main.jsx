/*
  Arquivo principal de inicialização da aplicação React.

  - Importa o React, o App e os estilos globais (index.css).
  - Localiza o elemento HTML com id "root" e renderiza o App dentro dele.
  - Utiliza <StrictMode> para ajudar a identificar erros e práticas inseguras
    durante o desenvolvimento.
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
