"""
Script de teste para a API de CNPJ
Antes de usar: python test_api.py
"""

import requests
import json

BASE_URL = "http://localhost:8000"

def test_post_empresa():
    """Testa o cadastro de uma empresa"""
    empresa_data = {
        "razao_social": "Empresa Teste Ltda",
        "cnpj": "12345678901234",
        "uf": "SP",
        "cep": "01310100",
        "municipio": "São Paulo",
        "qsa": [
            {
                "nome_socio": "João Silva",
                "qualificacao_socio": "Sócio-Administrador"
            },
            {
                "nome_socio": "Maria Santos",
                "qualificacao_socio": "Sócia"
            }
        ]
    }
    
    try:
        response = requests.post(f"{BASE_URL}/empresas", json=empresa_data)
        print("POST /empresas")
        print(f"Status: {response.status_code}")
        print(f"Resposta: {json.dumps(response.json(), indent=2, ensure_ascii=False)}")
        print("-" * 50)
        return response.status_code == 200
    except Exception as e:
        print(f"Erro ao fazer POST: {e}")
        return False

def test_get_empresa():
    """Testa a busca de uma empresa pelo CNPJ"""
    cnpj = "12345678901234"
    
    try:
        response = requests.get(f"{BASE_URL}/empresas/{cnpj}")
        print("GET /empresas/{cnpj}")
        print(f"Status: {response.status_code}")
        print(f"Resposta: {json.dumps(response.json(), indent=2, ensure_ascii=False)}")
        print("-" * 50)
        return response.status_code == 200
    except Exception as e:
        print(f"Erro ao fazer GET: {e}")
        return False

def test_get_empresa_inexistente():
    """Testa a busca de uma empresa inexistente"""
    cnpj = "99999999999999"
    
    try:
        response = requests.get(f"{BASE_URL}/empresas/{cnpj}")
        print("GET /empresas/{cnpj} (inexistente)")
        print(f"Status: {response.status_code}")
        print(f"Resposta: {json.dumps(response.json(), indent=2, ensure_ascii=False)}")
        print("-" * 50)
        return response.status_code == 404
    except Exception as e:
        print(f"Erro ao fazer GET: {e}")
        return False

if __name__ == "__main__":
    print("=" * 50)
    print("Testando API de CNPJ")
    print("=" * 50)
    print()
    
    try:
        # Primeiro cadastra uma empresa
        print("1. Cadastrando empresa...")
        print()
        test_post_empresa()
        
        # Depois busca a empresa cadastrada
        print("2. Buscando empresa cadastrada...")
        print()
        test_get_empresa()
        
        # Tenta buscar uma empresa que não existe
        print("3. Buscando empresa inexistente...")
        print()
        test_get_empresa_inexistente()
        
        print("=" * 50)
        print("Testes concluídos!")
        print("=" * 50)
        
    except requests.exceptions.ConnectionError:
        print("❌ Erro: Não conseguiu conectar ao servidor FastAPI")
        print("Certifique-se de que o servidor está rodando em http://localhost:8000")
