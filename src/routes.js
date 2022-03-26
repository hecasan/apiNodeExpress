const router = require('express').Router();

// Importar controllers

const UsuarioController = require('./controllers/UsuarioController')

router.post('/login', UsuarioController.login)

module.exports = router;