const router = require('express').Router();

// Importar controllers

const UsuarioController = require('./controllers/UsuarioController')

router.post('/criarUsuario', UsuarioController.login)
router.post('/login', UsuarioController.login)

module.exports = router;