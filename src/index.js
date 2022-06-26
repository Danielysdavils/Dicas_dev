import express from 'express';
const app = express();

import {db} from './infra/sqlite_db.js'
import {dicas} from './controller/dicas_controller.js'

app.use(express.json())

dicas(app, db)

app.listen(7000, () => {
    console.log('Rodando na porta 7000');
})