const router = require('express').Router();
const { verifyToken } = require('./modules/jwt');

// Importar controllers
const UserController = require('./controllers/UsuarioController');

router.post('/usuarios/criar', UserController.criar);
router.post('/usuarios/login', UserController.login);
router.post('/usuarios/teste', verifyToken, (req, res) => res.json({ success: true, data: ["chegou aqui"] }));

module.exports = router;