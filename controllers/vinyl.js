const express = require('express');
const VINYL = express.Router();
const Vinyl = require('../models/vinyl');


// INDEX ROUTE
// curl 'http://localhost:3003/vinyl'
VINYL.get('/', (req, res) => {
    // res.send('Hello from the  collections world')
    Vinyl.find({}, (err, foundVinyl) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }

        res.status(200).json(foundVinyl);
    })
});


// CREATE ROUTE
/*
curl -X POST -H "Content-Type: application/json" -d '{"cover_image": "https://img.discogs.com/S2z6AxpR6yFUA-brwMB1IEyLWB0=/fit-in/550x529/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4663501-1371492072-2956.jpeg.jpg", "title": "Nirvana - Nirvana"}' 'http://localhost:3003/vinyl'

curl -X POST -H "Content-Type: application/json" -d '{"collections":[{"id":"6050f3031d31b2ba78f34240"}]}' 'http://localhost:3003/vinyl'

curl -X POST -H "Content-Type: application/json" -d '{"myCollection":[{"_id": "ObjectId("6050f3031d31b2ba78f34240")"}]}' 'http://localhost:3003/collections'
*/
VINYL.post('/', (req, res) => {
    Vinyl.create(req.body, (err, createdVinyl) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }

        // since our server.js has 'express.json()' we know this will be formatted correctly
        res.status(200).send(createdVinyl);
    });
})


// UPDATE ROUTE
/*
curl -X PUT -H "Content-Type: application/json" -d '{"title":"I updated this"}' http://localhost:3003/vinyl/6050f3031d31b2ba78f34240
(replace the id with the id from your curl request)
*/
VINYL.put('/:id', (req, res) => {
    Vinyl.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedVinyl) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }

        res.status(200).send(updatedVinyl);
    });
});


// DELETE ROUTE
/*
curl -X DELETE 'http://localhost:3003/vinyl/6050f4dff92a89bc2a60b16e'
(replace the id with the id from your curl request)
*/
VINYL.delete('/:id', (req, res) => {
    Vinyl.findByIdAndRemove(req.params.id, (err, deletedVinyl) => {
        if (err) {
            res.status(400).json({ error: err.message });
        }
        res.status(200).json(deletedVinyl);
    });
});


module.exports = VINYL;