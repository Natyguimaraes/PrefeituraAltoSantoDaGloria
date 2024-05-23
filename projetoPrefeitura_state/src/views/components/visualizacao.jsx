import React, { useState, useEffect } from 'react';
import '../styles/App.css';


function Visualizacao() {
  const [dadosCadastrados, setDadosCadastrados] = useState([]);

  useEffect(() => {
    // Aqui você faz a requisição GET para obter os dados já cadastrados
    async function fetchDadosCadastrados() {
      try {
        const response = await fetch('http://localhost:3000/pessoas');
        if (!response.ok) {
          throw new Error(`Erro ao obter os dados: ${response.status}`);
        }
        const dados = await response.json();
        setDadosCadastrados(dados);
      } catch (err) {
        console.error("Erro ao obter os dados cadastrados", err);
      }
    }
    fetchDadosCadastrados();
  }, []); // O array vazio assegura que o useEffect será executado apenas uma vez após a montagem do componente

  return (
    <div>
     <div className="container_tabela">
     <h1 className="h1_visualizacao"> Dados Cadastrados </h1>
      <table>
        <thead>
          <tr>
          <th>Id</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Data de Cadastro</th>
            <th> CEP </th>
            <th> Logradouro </th>
            <th> Bairro </th>
            <th> Cidade </th>
            <th> Estado </th>
          </tr>
        </thead>
        <tbody>
          {dadosCadastrados.map((item, index) => (
            <tr key={index}>
                <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.cpf}</td>
              <td>{item.telefone}</td>
              <td>{item.data_cadastro}</td>
              <td>{item.cep}</td>
              <td>{item.logradouro}</td>
              <td>{item.bairro}</td>
              <td>{item.cidade}</td>
              <td>{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Visualizacao;
