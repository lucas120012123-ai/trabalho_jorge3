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