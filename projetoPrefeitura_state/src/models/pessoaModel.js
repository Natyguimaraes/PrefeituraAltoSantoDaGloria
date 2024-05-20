 import connection from '../database/db.js';

 export function read(callback){
    connection.query('SELECT * from pessoa', (err, result) => {
        if (err) {
            console.error('Erro ao ler dados do banco de dados:', err);
            callback(err, null);
            return;
        }
        console.log('Dados lidos do banco de dados:', result);
        callback(null, result);
    });
}

export function create(nome, cpf, telefone, data_cadastro, cep, logradouro, bairro, cidade, estado, callback){
    connection.query('INSERT INTO pessoa (nome, cpf, telefone, data_cadastro, cep, logradouro, bairro, cidade, estado) VALUES (?, ?, ?, ?, ?, ?,?,?,?)', [nome, cpf, telefone, data_cadastro, cep, logradouro, bairro, cidade, estado], callback);
}

export function update(id, novoDados, callback) {
    connection.query('UPDATE pessoa SET ? WHERE id = ?', [novoDados, id], callback);

}

export function deletePes(id, callback){

    connection.query('UPDATE pessoa SET ativo_pessoa = 0 WHERE id = ?', [id], callback);

}