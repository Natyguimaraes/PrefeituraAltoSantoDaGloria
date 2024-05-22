import { useState } from 'react';
import '../styles/App.css';
import FormCadastro from './FormCadastro';
import Visualizacao from './visualizacao';
import FormAtualizacao from './atualizarPessoa'

function Home() {

const [secaoAtual, setSecaoAtual] = useState('home');

const cliqueSecao = (secao) => {
    setSecaoAtual(secao)
};

    return (

        <div>
            {secaoAtual == 'home' && (
            <div className="containerHome">

            <h1> Selecione uma opção </h1>
             
             <div className="options">

                <button onClick={() => cliqueSecao('FormCadastro')} className='botao-menu'> Cadastrar morador </button> 
                <button onClick={() => cliqueSecao('visualizacao')} className='botao-menu'> Visualizar cadastros </button>
                <button onClick={()=> cliqueSecao('atualizarPessoa')} className='botao-menu'> Atualizar dados </button>
                <button onClick={() => cliqueSecao('deletarPessoa')} className='botao-menu'> Deletar dados</button>
            
             </div>
            
            </div>
            )}
            <div>
               
                    <div className='secao'>
                        {secaoAtual === 'FormCadastro' && <FormCadastro />}
                        </div>

                        <div className='secao'>
                        {secaoAtual === 'visualizacao' && <Visualizacao />}
                        </div>

                        <div className='secao'>
                        {secaoAtual === 'atualizarPessoa' && <FormAtualizacao />}
                        </div>
                
                {/*<div className="secao">
                    {secaoAtual === 'deletarPessoa' && <FormDeletar />}
        </div>*/}
            
        </div>
</div>
    );

}

export default Home;
