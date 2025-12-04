# Guia de Execução - Consulta de CNPJ

## Arquitetura

A aplicação possui dois componentes principais:
- **Frontend**: React + Vite rodando em `http://localhost:5173`
- **Backend**: FastAPI rodando em `http://localhost:8000`

## Como Executar

### 1. Instalar dependências do Python (Backend)

```bash
# Na pasta raiz do projeto
pip install fastapi uvicorn
```

### 2. Iniciar o Backend (FastAPI)

```bash
# Na pasta src/Api/
uvicorn main:app --reload
```

O backend estará disponível em: `http://localhost:8000`

API Docs (Swagger): `http://localhost:8000/docs`

### 3. Em outro terminal, iniciar o Frontend (React)

```bash
# Na pasta raiz do projeto
npm install
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`

## Endpoints da API

### GET `/empresas/{cnpj}`
Busca uma empresa pelo CNPJ

**Exemplo:**
```bash
curl http://localhost:8000/empresas/12345678901234
```

**Resposta (200 OK):**
```json
{
  "razao_social": "Empresa XYZ Ltda",
  "cnpj": "12345678901234",
  "uf": "SP",
  "cep": "01310100",
  "municipio": "São Paulo",
  "qsa": [
    {
      "nome_socio": "João Silva",
      "qualificacao_socio": "Sócio-Administrador",
      ...
    }
  ]
}
```

**Resposta (404):**
```json
{
  "detail": "Empresa não encontrada"
}
```

### POST `/empresas`
Cadastra uma nova empresa

**Exemplo:**
```bash
curl -X POST http://localhost:8000/empresas \
  -H "Content-Type: application/json" \
  -d '{
    "razao_social": "Empresa ABC Ltda",
    "cnpj": "98765432109876",
    "uf": "RJ",
    "cep": "20040020",
    "municipio": "Rio de Janeiro",
    "qsa": []
  }'
```

## Funcionalidades Implementadas

✅ Buscar empresa por CNPJ
✅ Validação de CNPJ (14 dígitos)
✅ Exibição de dados da empresa
✅ Exibição de sócios/administradores
✅ Tratamento de erros
✅ Loading state durante requisição
✅ CORS habilitado para comunicação Frontend-Backend

## Estrutura de Pastas

```
trabalho_jorge3/
├── src/
│   ├── Api/
│   │   └── main.py          # Backend FastAPI
│   ├── componentes/
│   │   └── CaixaDeMensagem.jsx  # Componente com formulário
│   ├── services/
│   │   └── apiService.js    # Serviço de comunicação com API
│   ├── navbar/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── requirements.txt (criar com: pip freeze > requirements.txt)
```

## Próximas Melhorias

- [ ] Validação de CNPJ via algoritmo
- [ ] Persistência de dados (banco de dados real)
- [ ] Autenticação
- [ ] Paginação de sócios
- [ ] Histórico de consultas
- [ ] Temas escuros/claros
