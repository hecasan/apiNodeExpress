const express = require('express');
const app = express();
require('dotenv').config();

const protocol = process.env.PROTOCOL || "http";
const ip = require('ip').address();
const port = process.env.PORT || 3100

app.listen(port, ()=> console.log(`
    Servidor rodando na porta http://localhost:${port} ou ${protocol}://${ip}:${port}
`))
