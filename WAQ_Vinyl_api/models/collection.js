const mongoose = require('mongoose');


const collectionSchema = mongoose.Schema({
    albums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vinyl' }]
})



module.exports = mongoose.model('Collection', collectionSchema);