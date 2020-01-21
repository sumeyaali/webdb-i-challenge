const express = require('express');

const Knex = ('../data/dbConfig.js');

const router = express.Router();



router.get('/', (req, res) => {
//Select * from accounts
Knex
.select('*')
.from('accounts')
.then(accounts => {
    res.status(200).json({accounts})
})
.catch(error => {
    res.status(500).json({error: "error getting the accounts" })
})
});

router.get('/:id', (req, res) => {
    Knex
    .select("*")
    .from("accounts")
    .where({id: req.params.id})
    first()
    .then(accounts => {
        res.status(200).json({accounts})
    })
    .catch(error => {
        res.status(500).json({error: "error getting the account" })
    })
});

router.post('/', (req, res) => {
    
});

router.put('/:id', (req, res) => {
    
});

router.delete('/:id', (req, res) => {
    
});




module.exports = router