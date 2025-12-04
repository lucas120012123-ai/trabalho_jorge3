/* Componente Navbar

  Este componente é responsável por exibir a barra de navegação superior da aplicação.
  Ele contém:

  - Uma imagem de logotipo importada do arquivo "logotipo.png".
  - Um título centralizado descrevendo a aplicação: "Consulta Geral de CNPJ".

  O layout e a estilização são controlados pelo arquivo "navbar.css",
  garantindo que a barra fique organizada, responsiva e visualmente consistente.

  Este componente é simples, reutilizável e aparece no topo de todas as páginas
  que o importarem.
*/

import React from "react";
import "./navbar.css";
import logo from "./logotipo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo-img" />
     
<h3 className="titulo">Consulta Geral de CNPJ</h3>
    </nav>
  );
}
