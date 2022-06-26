import { db } from "../infra/sqlite_db.js";
import { Dicas } from "../model/dicas_model.js";

export const dicas = (app) => {

    app.get('/dicas', (req, res) => {
        res.json({"Aqui suas dicas registradas" : db})
    })

    app.post('/dicas/create', (req,res) => {
        try{
            const body = req.body;
            const novaDica = new Dicas(body.titulo, body.descricao, body.data)
            db.dicas.push(novaDica)
            res.json({'Dica adicionada:' : novaDica})

        }catch(error){
            res.json({'message': error.message})
        }
    })

    app.get('/dicas/tips', (req, res) => {
        const nDicas = db.dicas.length
        let iDica = Math.floor(Math.random() * nDicas) 
        const dicaAl = db.dicas.filter(d => db.dicas.indexOf(d) === iDica)

        res.json({'Sua dica de hoje!': dicaAl})
    })
}