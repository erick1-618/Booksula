require("dotenv").config();
const express = require("express");
const route = require("./routes");

const PORTA = process.env.PORTA;
const HOST = process.env.HOST;

const server = express();

server.use(express.json());
server.use(route);

server.listen(PORTA, HOST, () => {
    console.log(`Funcionando na porta ${HOST}:${PORTA}`);
})