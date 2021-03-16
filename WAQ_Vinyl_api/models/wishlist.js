const mongoose = require('mongoose');


const wishListSchema = mongoose.Schema({
    albums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vinyl' }]
})



module.exports = mongoose.model('WishList', wishListSchema);