import { useState } from 'react';
import '../styles/App.css';
import FormCadastro from './FormCadastro';
import Visualizacao from './visualizacao';
import FormAtualizacao from './atualizarPessoa';
import FormDeleta from './deletarPessoa';

function Home() {

const [secaoAtual, setSecaoAtual] = useState('home');

const cliqueSecao = (secao) => {
    setSecaoAtual(secao)
};

    return (

        <div>
            {secaoAtual == 'home' && (
                <><h1 className="title_home"> Selecione uma opção </h1>
                <div className="containerHome">
                    <div className="options">

                    
                        <button onClick={() => cliqueSecao('FormCadastro')} className='botao-menu'> Cadastrar/ C </button>
                        
                        <button onClick={() => cliqueSecao('visualizacao')} className='botao-menu'> Visualizar cadastros/ R </button>
                        <button onClick={() => cliqueSecao('atualizarPessoa')} className='botao-menu'> Atualizar dados/ U </button>
                        <button onClick={() => cliqueSecao('deletarPessoa')} className='botao-menu'> Deletar dados/ D </button>
                        </div>

                </div></>
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
                
                <div className="secao">
                    {secaoAtual === 'deletarPessoa' && <FormDeleta />}
        </div>
            
        </div>
</div>
    );

}

export default Home;
