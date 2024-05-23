import {create, read, update, deletePes} from '../models/pessoaModel.js';

//Realizando insert (create)

export async function createPessoa(req, res){
    const { nome, cpf, telefone, data_cadastro, cep, logradouro, bairro, cidade, estado} = req.body;
    console.log('Dados recebidos do frontend:', {nome, cpf, telefone, data_cadastro, cep, logradouro, bairro, cidade, estado});

    create (nome, cpf, telefone, data_cadastro, cep, logradouro, bairro, cidade, estado, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(201).json({mensagem: 'Pessoa criada com sucesso'});
    });
}

//realizando consulta

export async function getAllPessoas(req, res) {
    read((err, pessoas) => {
        if(err){
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(pessoas);
    });
}

export async function getPessoasF(req, res) {
    const { id } = req.params;
    
    // Chame a função read para buscar uma pessoa específica pelo ID
    read(id, (err, pessoa) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(pessoa);
    });
}
//realizando atualização

export async function updatePessoa(req, res){
    const { id } = req.params;
    const novosDados = req.body;
    update(id, novosDados, (err, result) => {
        if (err) {
            res.status(500).json ({ error: err.message });
            return;
        }

        // para verificar se houve alterações
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Nenhuma pessoa encontrada para atualizar.' });
            return;
        }

        // Se chegou aqui, a pessoa foi atualizada com sucesso
        res.status(200).json({ message: 'Pessoa atualizada com sucesso' });
    });
}

//realizando delete (update/inativando)

export async function deletePessoa(req, res) {
    const { id } = req.params;
    console.log('delete recebidos do frontend: ', {id});
    deletePes(id, (err, result) => {
        if(err) {
            res.status(500).json({error: err.message});
            return;
        }
        res.send('Pessoa excluída com sucesso');
    });
}

