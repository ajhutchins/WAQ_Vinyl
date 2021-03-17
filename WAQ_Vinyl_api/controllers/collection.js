const express = require('express');
const COLLECTION = express.Router();
const Users = require('../models/users');
const Vinyl = require('../models/vinyl');


// INDEX ROUTE
// curl 'http://localhost:3003/vinyl'


// User.findOne({ userName: req.body.username}).populate('wishlist')

COLLECTION.get('/', (req, res) => {
    // res.send('Hello from the  collections world')
    Users.findOne({userName: req.body.username}).populate('myCollection').exec(function (err, Users) {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json( Users);
        // console.log('myCollection %s', Users.myCollection);

      });
});

// UPDATE ROUTE
/*
curl -X PUT -H "Content-Type: application/json" -d '{}' 'http://localhost:3003/users/collection/605191cc007d743b465ee710'
(replace the id with the id from your curl request)
*/
COLLECTION.put('/:id', (req, res) => {
    // res.send('Hello from the  collections world')
    console.log('PUT route')
    console.log(req.params.id)
    Users.findOne({userName: req.body.username},(err, foundUser) => {
        console.log(`Found User ${foundUser}`)
        Vinyl.findById(req.params.id, (err, foundVinyl) => {
            console.log(`Found Vinyl ${foundVinyl}`)
            console.log(`Found User ${foundUser}`)
            console.log(`Found User collection ${foundUser.myCollection}`)
            foundUser.myCollection.push(foundVinyl)
            foundUser.save()
        })
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(foundUser.myCollection);
    })
});

// DELETE ROUTE
/*
curl -X DELETE 'http://localhost:3003/vinyl/6050f4dff92a89bc2a60b16e'
(replace the id with the id from your curl request)
*/
COLLECTION.delete('/:id', (req, res) => {
    Users.findOne({userName: req.body.username}, (err, foundUsers) => {   
        Vinyl.findByIdAndRemove(req.params.id, (err, deletedVinyl) => {
            if (err) {
                res.status(400).json({ error: err.message });
            }
            res.status(200).json(deletedVinyl);
        })
    })
});

module.exports = COLLECTION;