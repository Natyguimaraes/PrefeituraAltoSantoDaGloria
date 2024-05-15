const connection = require('./db');

class Pessoa {

    static read(callback){
        connection.query('SELECT * FROM pessoa', callback);
    }

    static create(novaPessoa, callback) {
        connection.query('INSERT INTO pessoa SET ?', novaPessoa, callback);
    }

    static update(id, novoDados, callback) {
        connection.query('UPDATE pessoa SET ? WHERE id = ?', [novoDados, id], callback);
    }
    static delete(id, callback) {
        connection.query('UPDATE pessoa SET ? WHERE id = ?', [novosDados, id], callback);
    }
}

module.exports = Pessoa;