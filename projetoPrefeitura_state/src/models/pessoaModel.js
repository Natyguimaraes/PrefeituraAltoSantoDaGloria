import connection from '../database/db.js';

export function read(callback){
    connection.query('SELECT * from pessoa', callback);

}

export function create(nome, cpf, telefone, data_cadastro, cep, logradouro, bairro, cidade, estado, callback){
    connection.query('INSERT INTO pessoa (nome, cpf, telefone, data_cadastro, cep, logradouro, bairro, cidade, estado) VALUES (?, ?, ?, ?, ?, ?,?,?,?)', [nome, cpf, telefone, data_cadastro, cep, logradouro, bairro, cidade, estado], callback);
}

export function update(id, novoDados, callback) {
    connection.query('UPDATE pessoa set ? where id = ?', [novoDados, id], callback);

}

export function deletePes(id, callback){

    connection.query('UPDATE pessoa set ativo_pessoa = 0 where id = ?', [id], callback);

}