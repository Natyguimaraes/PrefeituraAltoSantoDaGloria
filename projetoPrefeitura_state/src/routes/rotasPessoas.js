import express from 'express'
const app = express();
import cors from "cors";
import connection from '../database/db.js';
import { getAllPessoas, createPessoa, updatePessoa, deletePessoa } from "../controllers/pessoaControler.js";


app.use(express.json());
app.use(cors());

app.get('/pessoas', getAllPessoas);
app.post('/pessoas', createPessoa);
app.put('/pessoas/:idPesquisa', updatePessoa);
app.delete('/pessoas/:idPesquisa', deletePessoa);

app.listen(3000, () => {
    console.log(`Servidor rodando com sucesso na porta 3000`);
});
