const express = require('express');

 const db = require('./accountDb');

const account = require('../data/dbConfig');

const router = express.Router();



router.get('/', (req, res) => {
//Select * from accounts
account
.select('*')
.from("accounts")
.then(accounts => {
    res.status(200).json({accounts})
})
.catch(error => {
    res.status(500).json({error: "error getting the accounts" })
})
});

router.get('/:id', (req, res) => {
    account
    .select("*")
    .from("accounts")
    .where({id: req.params.id})
    .first()
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(error => {
        res.status(500).json({error: "error getting the account" })
    })
});

router.post('/', (req, res) => {
    const data = req.body;
    if (!data.name || !data.budget) {
        res.status(400).json( { errorMessage: "Please provide name and budget for the account." })
    } else {
        db 
        .insert(data, "id") 
        .then(accounts => {
             res.status(201).json(accounts)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: "Error adding the post"})
        })
    }
    
});

router.put('/:id', (req, res) => {
    const changes= req.body
    //Validate the data

    db
    .update(req.params.id, changes)
    .then(updated => {
        res.status(200).json(updated)
    })
    .catch(error => {
        res.status(500).json({error: "Error updating the post"})
    })

});

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    .then(account => {
        res.status(200).json(account)
    })
    .catch(error => {
        res.status(500).json({error: "post no longer exists"})
    })
});

module.exports = router