const express = require('express');
const USERS = express.Router();
const User = require('../models/users');


// INDEX ROUTE
// curl 'http://localhost:3003/vinyl'
USERS.get('/', (req, res) => {
    // res.send('Hello from the  collections world')
    User.find({}, (err, foundUsers) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }

        res.status(200).json(foundUsers);
    })
});


// CREATE ROUTE
/*
curl -X POST -H "Content-Type: application/json" -d '{"name":"world kindness"}' 'http://localhost:3003/collections'
curl -X POST -H "Content-Type: application/json" -d '{"name":"zipper"}' 'http://localhost:3003/collections'
*/
USERS.post('/', (req, res) => {
    User.create(req.body, (err, createdUser) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }

        // since our server.js has 'express.json()' we know this will be formatted correctly
        res.status(200).send(createdUser);
    });
})


module.exports = USERS;