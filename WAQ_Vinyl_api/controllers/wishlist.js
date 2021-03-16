const express = require('express');
const WISHLIST = express.Router();
const Users = require('../models/users');
const Vinyl = require('../models/vinyl');


// INDEX ROUTE
// curl 'http://localhost:3003/vinyl'
WISHLIST.get('/:id', (req, res) => {
    // res.send('Hello from the  collections world')
    console.log(req.params.id)
    Users.findOne({userName: req.body.username}, (err, foundUsers) => {
        
        Vinyl.findById(req.params.id, (err, foundVinyl) => {
            console.log(foundVinyl)
            foundUsers.myCollection.push(foundVinyl)
            foundUsers.save()
        })

        console.log(req.body.username)
        console.log(foundUsers)
        if (err) {
            res.status(400).json({ error: err.message });
        }

        res.status(200).json(foundUsers);
    })
});


module.exports = WISHLIST;