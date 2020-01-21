const express = require('express');

const db = require('./data/dbConfig.js');
const Router = require('./data/seeds/accountRouter');
const server = express();

server.use(express.json());

server.use('/api/accounts', Router)

server.get('/', (req, res) => {
    res.send(`<h2>IT'S WORKING! IT'S WORKING!</h2>`)
})

module.exports = server;