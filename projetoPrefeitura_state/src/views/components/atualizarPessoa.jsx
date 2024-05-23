import React, { useState } from 'react';
import '../styles/App.css';
import Home from '../components/home'

function FormAtualizacao() {
  
  const [secaoAtual, setSecaoAtual] = useState ('atualizarPessoa');
  const cliqueSecao = (secao) => {
    setSecaoAtual(secao);
  };

  const [formValores, setFormValores] = useState({
    id:'',
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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValores((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log("Dados a serem enviados: ", formValores.id);
      const response = await fetch(`http://localhost:3000/pessoas/${formValores.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValores)
     });

     const json = await response.json();
     console.log(response)
     console.log(json);

    } catch (err) {
      console.error("Erro ao enviar", err)
    }
  };
  
  return (
    <><div>
      {secaoAtual === 'atualizarPessoa' && (
        <><div className="Container_form">
          <div className="form">
            <h1>Atualização de Registro</h1>
            <form onSubmit={handleSubmit}>
              <div className="form_row">
                <div className="div_dados">
                  <div className="input_container">
                    <label htmlFor="nome">ID a ser atualizado:</label>
                    <input
                      type="text"
                      id="id"
                      name="id"
                      value={formValores.id}
                      onChange={handleChange} />
                  </div>
                  <div className="input_container">
                    <label htmlFor="nome">Nome:</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formValores.nome}
                      onChange={handleChange} />
                  </div>
                  <div className="input_container">
                    <label htmlFor="cpf">CPF:</label>
                    <input
                      type="text"
                      id="cpf"
                      name="cpf"
                      value={formValores.cpf}
                      onChange={handleChange} />
                  </div>
                  <div className="input_container">
                    <label htmlFor="telefone">Telefone:</label>
                    <input
                      type="text"
                      id="telefone"
                      name="telefone"
                      value={formValores.telefone}
                      onChange={handleChange} />
                  </div>
                  <div className="input_container">
                    <label htmlFor="data_cadastro">Data de Cadastro:</label>
                    <input
                      type="date"
                      id="data_cadastro"
                      name="data_cadastro"
                      value={formValores.data_cadastro}
                      onChange={handleChange} />
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
                      onChange={handleChange} />
                  </div>
                  <div className="input_container">
                    <label htmlFor="logradouro">Logradouro:</label>
                    <input
                      type="text"
                      id="logradouro"
                      name="logradouro"
                      value={formValores.logradouro}
                      onChange={handleChange} />
                  </div>
                  <div className="input_container">
                    <label htmlFor="bairro">Bairro:</label>
                    <input
                      type="text"
                      id="bairro"
                      name="bairro"
                      value={formValores.bairro}
                      onChange={handleChange} />
                  </div>
                  <div className="input_container">
                    <label htmlFor="cidade">Cidade:</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={formValores.cidade}
                      onChange={handleChange} />
                  </div>
                  <div className="input_container">
                    <label htmlFor="estado">Estado:</label>
                    <input
                      type="text"
                      id="estado"
                      name="estado"
                      value={formValores.estado}
                      onChange={handleChange} />
                  </div>
                </div>
              </div>
              <button type="submit" onClick={handleSubmit}>ATUALIZAR</button>
            </form>
          </div>
        </div><div className="home_voltar">
            <button className="button_home_voltar" onClick={() => cliqueSecao('home')}> Voltar a página inicial </button>
          </div></>
      )}
    </div>
    
    <div className='secao'>
        {secaoAtual === 'home' && <Home />}
      </div></>

  );
}

export default FormAtualizacao;
