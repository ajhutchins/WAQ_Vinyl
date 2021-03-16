const express = require('express');
const COLLECTIONS = express.Router();
// const Collection = require('../models/collection');


// INDEX ROUTE
// curl 'http://localhost:3003/vinyl'
COLLECTIONS.get('/', (req, res) => {
    res.send('Hello from the  collections world')
    // Collection.find({}, (err, foundCollections) => {
    //     if (err) {
    //         res.status(400).json({ error: err.message });
    //     }

    //     res.status(200).json(foundCollections);
    // })
});


module.exports = COLLECTIONS;