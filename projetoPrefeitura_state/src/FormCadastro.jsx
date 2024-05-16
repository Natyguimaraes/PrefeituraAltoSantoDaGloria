import { useState } from 'react'
import './App.css'


function FormCadastro() {

  const [formValores, setFormValores] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    data_cadastro: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValores(prevState => ({
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
      console.err("Erro ao enviar os dados", err);
    }

  };

  return (
    <>

      <div>
       

          <div className="Container">

            <div className="form">
              <h1> Cadastre-se </h1>
              <form onSubmit={handleSubmit}>
                Nome:
                <input type="text" name="nome" value={formValores.nome} onChange={handleChange} />
                <br />

                CPF:
                <input type="text" name="cpf" value={formValores.cpf} onChange={handleChange} />
                <br />

                Telefone:
                <input type="text" name="telefone" value={formValores.telefone} onChange={handleChange} />
                <br />

                Data de Cadastro:
                <input type="date" name="data_cadastro" value={formValores.data_cadastro} onChange={handleChange} />
                <br />

                <button type="submit"> CADASTRAR </button>
              </form>
             
            </div>
          </div>

      </div>
    </>
  );
}

export default FormCadastro;
