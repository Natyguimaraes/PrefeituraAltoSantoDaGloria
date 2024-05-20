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

//realizando atualização

export async function updatePessoa(req, res){
    const { id } = req .params;
    const novosDados = req.body;
    update(id, novosDados, (err, result) => {
        if (err) {
            res.status(500).json ({ error: err.message});
            return;
        }

        res.send('Pessoa atualizada com sucesso');
    });
}

//realizando delete (update/inativando)

export async function deletePessoa(req, res) {
    const { id } = req.params;
    deletePes(id, (err, result) => {
        if(err) {
            res.status(500).json({error: err.mensage});
            return;
        }
        res.send('Pessoa excluída com sucesso');
    });
}

