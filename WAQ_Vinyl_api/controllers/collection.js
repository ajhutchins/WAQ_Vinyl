const express = require('express');
const COLLECTION = express.Router();
const Users = require('../models/users');
const Vinyl = require('../models/vinyl');


// INDEX ROUTE
// curl 'http://localhost:3003/vinyl'
COLLECTION.get('/:id', (req, res) => {
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


// CREATE ROUTE
/*

curl -X POST -H "Content-Type: application/json" -d '{"username":"world kindness"}' 'http://localhost:3003/users'

*/
// COLLECTION.post('/', (req, res) => {
//     User.create(req.body, (err, createdUser) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//         }

//         // since our server.js has 'express.json()' we know this will be formatted correctly
//         res.status(200).send(createdUser);
//     });
// })


// UPDATE ROUTE
/*
curl -X PUT -H "Content-Type: application/json" -d '{"title":"I updated this"}' http://localhost:3003/vinyl/6050f3031d31b2ba78f34240
(replace the id with the id from your curl request)
*/
// COLLECTION.put('/:id', (req, res) => {
//     User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//         }

//         res.status(200).send(updatedUser);
//     });
// });


// DELETE ROUTE
/*
curl -X DELETE 'http://localhost:3003/vinyl/6050f4dff92a89bc2a60b16e'
(replace the id with the id from your curl request)
*/
// COLLECTION.delete('/:id', (req, res) => {
//     User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//         }
//         res.status(200).json(deletedUser);
//     });
// });




module.exports = COLLECTION;