import { useState } from "react";
import { apiService } from "../services/apiService";

export default function CaixaDeMensagem() {
  const [mensagem, setMensagem] = useState("");
  const [empresaData, setEmpresaData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const enviarMensagem = async () => {
    if (!mensagem || mensagem.length !== 14) {
      setErro("Por favor, digite um CNPJ válido com 14 dígitos");
      return;
    }

    setLoading(true);
    setErro("");
    setEmpresaData(null);

    try {
      const dados = await apiService.buscarEmpresa(mensagem);
      setEmpresaData(dados);
      setMensagem("");
    } catch (error) {
      setErro(error.message || "Erro ao consultar CNPJ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "20px", maxWidth: "600px", width: "100%" }}>
        <h2 style={{ color: "white" }}>Informe seu CNPJ e clique em Consultar.</h2>

        <input
          type="text"
          value={mensagem}
          maxLength={14}
          onChange={(e) => {
            const apenasNumeros = e.target.value.replace(/\D/g, "");
            setMensagem(apenasNumeros);
            setErro("");
          }}
          placeholder="Digite seu CNPJ"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ffffffff",
            marginBottom: "10px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={enviarMensagem}
          disabled={loading}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            background: loading ? "#999" : "#4CAF50",
            color: "white",
            cursor: loading ? "not-allowed" : "pointer",
            width: "100%",
            fontSize: "16px",
          }}
        >
          {loading ? "Consultando..." : "Consultar"}
        </button>

        {erro && (
          <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f44336", borderRadius: "8px", color: "white" }}>
            <strong>Erro:</strong> {erro}
          </div>
        )}

        {empresaData && (
          <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#1976d2", borderRadius: "8px", color: "white" }}>
            <h3>Dados da Empresa</h3>
            <p><strong>Razão Social:</strong> {empresaData.razao_social}</p>
            <p><strong>CNPJ:</strong> {empresaData.cnpj}</p>
            <p><strong>UF:</strong> {empresaData.uf}</p>
            <p><strong>CEP:</strong> {empresaData.cep}</p>
            {empresaData.municipio && (
              <p><strong>Município:</strong> {empresaData.municipio}</p>
            )}
            {empresaData.qsa && empresaData.qsa.length > 0 && (
              <div style={{ marginTop: "15px" }}>
                <h4>Sócios/Administradores:</h4>
                {empresaData.qsa.map((socio, index) => (
                  <div key={index} style={{ marginTop: "10px", padding: "10px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "4px" }}>
                    <p><strong>Nome:</strong> {socio.nome_socio}</p>
                    {socio.qualificacao_socio && (
                      <p><strong>Qualificação:</strong> {socio.qualificacao_socio}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}