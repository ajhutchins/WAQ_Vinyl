const mongoose = require('mongoose');


const vinylSchema = mongoose.Schema({
    artist: String,
    title: String,
    year: String,
    genre: [{ type: String }],
    cover_image: String,
    label: [{ type: String}],

    quantity: { type: Number, default: 0 },
    price: Number
})



module.exports = mongoose.model('Vinyl', vinylSchema);