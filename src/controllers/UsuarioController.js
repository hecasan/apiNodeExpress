const conexao = require('../database/conexao');
const { createToken } = require('../modules/jwt');

const responseModel = {
    success: false,
    data: [],
    error: []
}

module.exports = {

    async criar(req, res) {
        const response = {...responseModel}

        const { usuario, senha } = req.body;

        const [id, affectedRows] = await conexao.query(`
            INSERT INTO usuarios VALUES (
                DEFAULT,
                '${usuario}',
                '${senha}',
                NOW(),
                NOW()
            );
        `)

        if(affectedRows > 0) {
            response.success = true
            response.data = [{ token: await createToken(id) }]
        }

        return res.json(response)
    },

    async login(req, res) {
        const response = {...responseModel}

        const { usuario, senha } = req.body;

        const [, data] = await conexao.query(`
            SELECT * FROM usuarios
            WHERE usuario='${usuario}' AND senha='${senha}'
            ORDER BY id DESC LIMIT 1
        `)

        if(data.length > 0) {
            response.success = true
            response.data = [{ token: await createToken(data[0].id) }]
        }
        
        return res.json(response);
    }

};