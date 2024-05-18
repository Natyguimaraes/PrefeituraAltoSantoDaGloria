import { useState } from 'react';
import '../styles/App.css';

function FormCadastro() {
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
      console.log("dados a serem enviados:", formValores);
      const response = await fetch('http://localhost:3000/pessoas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValores)
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar a solicitação: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.error("Erro ao enviar os dados", err); // Corrigido para console.error
    }
  };

  return (
    <>
      <div>
        <div className="Container_form">
          <div className="form">
            <h1> Cadastre-se </h1>
            <form onSubmit={handleSubmit}>
              <div className="div_dados">
              Nome:
              <input
                type="text"
                name="nome"
                value={formValores.nome}
                onChange={handleChange}
              />
              <br />
              CPF:
              <input
                type="text"
                name="cpf"
                value={formValores.cpf}
                onChange={handleChange}
              />
              <br />
              Telefone:
              <input
                type="text"
                name="telefone"
                value={formValores.telefone}
                onChange={handleChange}
              />
              <br />
              Data de Cadastro:
              <input
                type="date"
                name="data_cadastro"
                value={formValores.data_cadastro}
                onChange={handleChange}
              />
              </div>
              <br />
              <div className="div_endereco"> 
              Digite o CEP:
              <input
                type="text"
                name="cep"
                value={formValores.cep}
                onChange={handleChange}
                />
                <br></br>

              Logradouro: 
              <input
              type="text"
              name="logradouro"
              value={formValores.logradouro}
              onChange={handleChange}
              />
              <br></br>

              Bairro:
              <input
              type="text"
              name="bairro"
              value={formValores.bairro}
              onChange={handleChange}
              />
              <br></br>

              Cidade:
              <input
              type="text"
              name="cidade"
              value={formValores.cidade}
              onChange={handleChange}
              />
              <br></br>

              Estado:
              <input
              type="text"
              name="estado"
              value={formValores.estado}
              onChange={handleChange}
              />
              <br></br>
              </div>
             <button type="submit"> CADASTRAR </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormCadastro;

