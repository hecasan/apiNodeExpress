const conexao = require('../database/conexao');

const responseModel = {
  success: false,
  data: [],
  errors: [],
};

module.exports = {

  async criarUsuario(req, res) {
    const response = { ...responseModel };

    const {usuario, senha} = req.body;
    const [, affectedRows] = await conexao.query(`
        INSERT INTO usuarios VALUES (DEFAULT, ${usuario}, ${senha}, NOW(), NOW(), NOW())    
    `)

    response.success = affectedRows > 0

    return res.json(response);
  },

  async login(req, res) {
    const response = { ...responseModel };

    const {usuario, senha} = req.body;
    const [, data] = await conexao.query(`
        SELECT * FROM usuarios WHERE username = '${usuario}', AND password = '${senha}',    
    `)
    console.log(data)

    return res.json(response);
  },
};
