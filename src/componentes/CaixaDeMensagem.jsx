import { useState } from "react";

export default function CaixaDeMensagem() {
  const [mensagem, setMensagem] = useState("");
  const [mensagemFinal, setMensagemFinal] = useState("");

  const enviarMensagem = () => {
    setMensagemFinal(mensagem);
    setMensagem("");
  };

  return (
    <div
  style={{
    width: "100%",
    minHeight: "60vh", // garante um tamanho agradável sem exagero
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
        >
      <div style={{ padding: "20px", maxWidth: "400px" }}>
        <h2 style={{ color: "white" }}>Informe seu CNPJ e clique em Consultar.</h2>
        

       <input
  type="text"
  value={mensagem}
  maxLength={14}
  onChange={(e) => {
    const apenasNumeros = e.target.value.replace(/\D/g, "");
    setMensagem(apenasNumeros);
  }}
  placeholder="Digite seu CNPJ"
  style={{
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ffffffff",
    marginBottom: "10px",
  }}
/>

        <button
          onClick={enviarMensagem}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            background: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Consultar
        </button>

        {mensagemFinal && (
          <p style={{ marginTop: "20px", fontSize: "18px", color: "white" }}>
            <strong>CNPJ Conferido.</strong>{mensagemFinal}
          </p>
        )}
      </div>
    </div>
  );
}