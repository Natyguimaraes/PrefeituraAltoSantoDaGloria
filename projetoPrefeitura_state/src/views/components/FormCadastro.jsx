import { useState } from 'react';
import '../styles/App.css';
import { FaUser,
  FaIdCard,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRoad,
  FaBuilding,
  FaCity,
  FaFlag } from 'react-icons/fa';

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
        <h1> Registro de Munícipes </h1>
        <form onSubmit={handleSubmit}>
          <div className="form_row">
            <div className="div_dados">
            <div className="input_container">
              <FaUser className="input_icon"/>
              <input 
                type="text"
                name="nome"
                placeholder="Nome"
                value={formValores.nome}
                onChange={handleChange}  
              />
              </div>
            
              <div className="input_container">
                <FaIdCard className="input_icon"/>
              <input
                type="text"
                name="cpf"
                placeholder="CPF"
                value={formValores.cpf}
                onChange={handleChange}
              />
              </div>
             
              <div className="input_container">
                <FaPhone className="input_icon" />
              <input
                type="text"
                name="telefone"
                placeholder="Telefone"
                value={formValores.telefone}
                onChange={handleChange}
              />
              </div>
              
              <div className="input_container">
                <FaCalendarAlt className="input_icon" />
              <input
                type="date"
                name="data_cadastro"
                placeholder="Data de Cadastro"
                value={formValores.data_cadastro}
                onChange={handleChange}
              />
              </div>
              </div>
              
            <div className="div_endereco"> 
            <div className="input_container">
                <FaMapMarkerAlt className="input_icon" />
              <input
                type="text"
                name="cep"
                placeholder="Digite o CEP"
                value={formValores.cep}
                onChange={handleChange}
              />
              </div>

              <div className="input_container">
                <FaRoad className="input_icon" />
              <input
                type="text"
                name="logradouro"
                placeholder="Logradouro"
                value={formValores.logradouro}
                onChange={handleChange}
              />
              </div>
              
              <div className="input_container">
                <FaBuilding className="input_icon" />
              <input
                type="text"
                name="bairro"
                placeholder="Bairro"
                value={formValores.bairro}
                onChange={handleChange}
              />
              </div>
              
              <div className="input_container">
                <FaCity className="input_icon" />
              <input
                type="text"
                name="cidade"
                placeholder="Cidade"
                value={formValores.cidade}
                onChange={handleChange}
              />
              </div>
              
              <div className="input_container">
                <FaFlag className="input_icon" />
              <input
                type="text"
                name="estado"
                placeholder="Estado"
                value={formValores.estado}
                onChange={handleChange}
              />
              </div>
            </div>
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

