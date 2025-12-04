from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware

# MODELOS
class Socio(BaseModel):
    pais: Optional[str] = None
    nome_socio: str
    codigo_pais: Optional[str] = None
    faixa_etaria: Optional[str] = None
    cnpj_cpf_do_socio: Optional[str] = None
    qualificacao_socio: Optional[str] = None
    codigo_faixa_etaria: Optional[int] = None
    data_entrada_sociedade: Optional[str] = None
    identificador_de_socio: Optional[int] = None
    cpf_representante_legal: Optional[str] = None
    nome_representante_legal: Optional[str] = None
    codigo_qualificacao_socio: Optional[int] = None
    qualificacao_representante_legal: Optional[str] = None
    codigo_qualificacao_representante_legal: Optional[int] = None

class Empresa(BaseModel):
    razao_social: str
    cnpj: str
    uf: str
    cep: str
    municipio: Optional[str] = None
    qsa: Optional[List[Socio]] = None

app = FastAPI()

# CORS para React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # libere geral (depois pode limitar)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# "Banco de dados" temporário
empresas_db = []


# Cadastro de empresas
@app.post("/empresas")
def receber_empresa(empresa: Empresa):
    empresa_dict = empresa.dict()   # garantir formato JSON
    empresas_db.append(empresa_dict)
    return {
        "mensagem": "Empresa recebida com sucesso!",
        "dados": empresa_dict
    }


# Buscar empresa pelo CNPJ
@app.get("/empresas/{cnpj}")
def buscar_empresa(cnpj: str):
    for empresa in empresas_db:
        if empresa["cnpj"] == cnpj:
            return empresa
    
    raise HTTPException(status_code=404, detail="Empresa não encontrada")