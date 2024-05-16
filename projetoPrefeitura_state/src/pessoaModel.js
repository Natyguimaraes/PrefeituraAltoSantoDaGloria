import connection from './db.js';

export function read(callback){
    connection.query('SELECT * from pessoa', callback);

}

export function create(nome, cpf, telefone, data_cadastro, callback){
    connection.query('INSERT INTO pessoa (nome, cpf, telefone, data_cadastro) VALUES (?, ?, ?, ?)', [nome, cpf, telefone, data_cadastro], callback);
}

export function update(id, novoDados, callback) {
    connection.query('UPDATE pessoa set ? where id = ?', [novoDados, id], callback);

}

export function deletePes(id, callback){

    connection.query('UPDATE pessoa set ativo_pessoa = 0 where id = ?', [id], callback);

}