# 🎯 Guia Passo a Passo - Executar o Projeto

## Requisitos
- Python 3.8+ instalado
- Node.js 16+ instalado
- 2 terminais abertos

---

## 📍 PASSO 1: Instalar dependências Python

```powershell
# No terminal 1, vá até a pasta raiz do projeto
cd c:\Users\zetec\Documents\VSCodes\trabalho_jorge3

# Instale as dependências FastAPI
pip install -r requirements.txt
```

**Esperado:** Pacotes fastapi, uvicorn, pydantic instalados.

---

## 📍 PASSO 2: Iniciar Backend (FastAPI)

```powershell
# Continue no Terminal 1
cd src\Api

# Inicie o servidor FastAPI
uvicorn main:app --reload
```

**Esperado:**
```
Uvicorn running on http://127.0.0.1:8000
```

Deixe este terminal aberto! ✓

---

## 📍 PASSO 3: Instalar dependências Node.js

```powershell
# No Terminal 2, vá até a raiz do projeto
cd c:\Users\zetec\Documents\VSCodes\trabalho_jorge3

# Instale as dependências npm
npm install
```

**Esperado:** `added X packages` (sem erros de críticos)

---

## 📍 PASSO 4: Iniciar Frontend (React)

```powershell
# Continue no Terminal 2
npm run dev
```

**Esperado:**
```
  VITE v7.2.4  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

---

## 📍 PASSO 5: Testar no Navegador

1. Abra seu navegador
2. Acesse: `http://localhost:5173`
3. Você verá a página com o formulário de consulta CNPJ
4. Vá para o PASSO 6

---

## 📍 PASSO 6: Testar a API (Primeira vez)

Como o banco de dados começa vazio, você precisa cadastrar uma empresa primeiro!

### Opção A: Usar o Swagger UI

1. Abra em outra aba: `http://localhost:8000/docs`
2. Clique em `POST /empresas`
3. Clique em "Try it out"
4. Substitua o exemplo com:

```json
{
  "razao_social": "Google Brasil Ltda",
  "cnpj": "12345678901234",
  "uf": "SP",
  "cep": "01310100",
  "municipio": "São Paulo",
  "qsa": [
    {
      "nome_socio": "Sundar Pichai",
      "qualificacao_socio": "CEO"
    }
  ]
}
```

5. Clique em "Execute"
6. Você verá uma resposta com status 200 ✓

### Opção B: Usar o script de teste

```powershell
# Em um terceiro terminal, no diretório raiz
pip install requests
python test_api.py
```

---

## 📍 PASSO 7: Consultar CNPJ no Site

1. Volte para a aba: `http://localhost:5173`
2. Digite o CNPJ: `12345678901234`
3. Clique em "Consultar"
4. **Esperado:** Aparecem os dados da empresa cadastrada!

---

## 📍 PASSO 8 (Opcional): Cadastrar mais empresas

Use o Swagger UI novamente (http://localhost:8000/docs) para cadastrar outras empresas com CNPJs diferentes.

Cada CNPJ consulta retornará dados diferentes!

---

## 🎨 Interface Esperada

### Caso de Sucesso:
```
┌─────────────────────────────────┐
│   Consulta Geral de CNPJ        │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ Digite seu CNPJ                 │
├─────────────────────────────────┤
│ [12345678901234           ]      │
│ [   Consultar        ]           │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ 📋 Dados da Empresa             │
├─────────────────────────────────┤
│ Razão Social: Google Brasil     │
│ CNPJ: 12345678901234           │
│ UF: SP                          │
│ CEP: 01310100                   │
│ Município: São Paulo            │
│                                 │
│ 👥 Sócios/Administradores:      │
│ • Sundar Pichai (CEO)           │
└─────────────────────────────────┘
```

### Caso de Erro:
```
┌─────────────────────────────────┐
│ ⚠️ Erro                         │
│ CNPJ não encontrado na base...  │
└─────────────────────────────────┘
```

---

## 🆘 Checklist de Troubleshooting

- [ ] Terminal 1: FastAPI rodando na porta 8000?
- [ ] Terminal 2: React rodando na porta 5173?
- [ ] Navegador mostra a página sem erros?
- [ ] Console do navegador (F12) mostra erros?
- [ ] Dados foram cadastrados antes de consultar?
- [ ] Digitou exatamente 14 dígitos do CNPJ?

---

## 📊 Diagrama de Comunicação

```
┌─────────────────┐
│  Navegador      │  http://localhost:5173
│  React App      │
└────────┬────────┘
         │ fetch()
         │ GET /empresas/12345678901234
         │
         ↓
┌─────────────────┐
│  FastAPI        │  http://localhost:8000
│  Backend        │
│  (Python)       │
└─────────────────┘
         ↑
         │ resposta JSON
         │
         │
         └─ Dados da empresa exibidos no site
```

---

## ✅ Sucesso!

Se tudo funcionou, você tem:
- ✅ Backend FastAPI funcionando
- ✅ Frontend React funcionando
- ✅ Comunicação entre eles
- ✅ Consulta de CNPJs integrada

🎉 **A integração está completa!**

---

## 📌 Dicas Finais

- **Não feche nenhum terminal** enquanto estiver testando
- Para parar os servidores: `Ctrl+C` em cada terminal
- Se mudar o código React, a página recarrega automaticamente
- Se mudar o código Python, o servidor reinicia automaticamente
- Consulte `INTEGRACAO_API.md` para mais detalhes técnicos
