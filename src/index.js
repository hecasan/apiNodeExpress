const express = require('express');
const app = express();
require('dotenv').config();

// Configuração do servidor
app.use(express.json());

// importar as rotas
const routes = require('./routes');
app.use(routes)

// servidor data config
const protocol = process.env.PROTOCOL || 'http';
const ip = require('ip').address();
const port = process.env.PORT || 3030;

app.listen(port, console.log(`Servidor rodando em http://localhost:${port} or ${protocol}:${ip}:${port}`));