// Serviço para comunicar com a API FastAPI
const API_BASE_URL = "http://localhost:8000";

export const apiService = {
  // Buscar empresa pelo CNPJ
  async buscarEmpresa(cnpj) {
    try {
      const response = await fetch(`${API_BASE_URL}/empresas/${cnpj}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("CNPJ não encontrado na base de dados");
        }
        throw new Error(`Erro ao buscar empresa: ${response.statusText}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro na requisição:", error);
      throw error;
    }
  },

  // Cadastrar empresa
  async cadastrarEmpresa(empresaData) {
    try {
      const response = await fetch(`${API_BASE_URL}/empresas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(empresaData),
      });

      if (!response.ok) {
        throw new Error(`Erro ao cadastrar empresa: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erro na requisição:", error);
      throw error;
    }
  },
};
