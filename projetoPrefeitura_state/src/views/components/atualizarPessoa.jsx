import React, { useState } from 'react';
import '../styles/App.css';

function FormAtualizacao() {
  const [id, setId] = useState('');
  const [formValores, setFormValores] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    data_cadastro: '',
    cep: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    estado: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePesquisaSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      setError('Por favor, insira um ID válido.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://localhost:3000/pessoas/${formValores.id}`);
      if (!response.ok) {
        throw new Error(`Erro ao obter os dados da pessoa: ${response.status}`);
      }
      const dados = await response.json();
      if (!dados) {
        setError('Nenhum dado encontrado para o ID fornecido.');
      } else {
        setFormValores(dados);
        setSuccess('');
      }
    } catch (err) {
      setError("Erro ao obter os dados da pessoa: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValores((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await fetch(`http://localhost:3000/pessoas/${formValores.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValores)
      });
      if (!response.ok) {
        throw new Error(`Erro ao atualizar os dados da pessoa: ${response.status}`);
      }
      setSuccess('Pessoa atualizada com sucesso');
    } catch (err) {
      setError("Erro ao atualizar os dados da pessoa: " + err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="Container_form">
      <div className="form">
        <h1>Atualização de Registro</h1>
        <form onSubmit={handlePesquisaSubmit}>
          <div className="form_row">
            <label htmlFor="id">Pesquisar por ID:</label>
            <input 
              type="text"
              id="id"
              value={formValores.id}
              onChange={(e) => setId(e.target.value)}
            />
            <button type="submit" disabled={loading}>Pesquisar</button>
          </div>
          {error && <p className="error">{error}</p>}
          {loading && <p>Carregando...</p>}
        </form>
        <form onSubmit={handleSubmit}>
          <div className="form_row">
            <div className="div_dados">
              <div className="input_container">
                <label htmlFor="nome">Nome:</label>
                <input 
                  type="text"
                  id="nome"
                  name="nome"
                  value={formValores.nome}
                  onChange={handleChange}  
                />
              </div>
              <div className="input_container">
                <label htmlFor="cpf">CPF:</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formValores.cpf}
                  onChange={handleChange}
                />
              </div>
              <div className="input_container">
                <label htmlFor="telefone">Telefone:</label>
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  value={formValores.telefone}
                  onChange={handleChange}
                />
              </div>
              <div className="input_container">
                <label htmlFor="data_cadastro">Data de Cadastro:</label>
                <input
                  type="date"
                  id="data_cadastro"
                  name="data_cadastro"
                  value={formValores.data_cadastro}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="div_endereco"> 
              <div className="input_container">
                <label htmlFor="cep">CEP:</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={formValores.cep}
                  onChange={handleChange}
                />
              </div>
              <div className="input_container">
                <label htmlFor="logradouro">Logradouro:</label>
                <input
                  type="text"
                  id="logradouro"
                  name="logradouro"
                  value={formValores.logradouro}
                  onChange={handleChange}
                />
              </div>
              <div className="input_container">
                <label htmlFor="bairro">Bairro:</label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  value={formValores.bairro}
                  onChange={handleChange}
                />
              </div>
              <div className="input_container">
                <label htmlFor="cidade">Cidade:</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={formValores.cidade}
                  onChange={handleChange}
                />
              </div>
              <div className="input_container">
                <label htmlFor="estado">Estado:</label>
                <input
                  type="text"
                  id="estado"
                  name="estado"
                  value={formValores.estado}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button type="submit" disabled={loading}>ATUALIZAR</button>
          {success && <p className="success">{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default FormAtualizacao;
