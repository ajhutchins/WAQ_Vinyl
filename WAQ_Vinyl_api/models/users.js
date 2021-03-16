const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    wishlist: [ {type: mongoose.Schema.Types.ObjectId, ref: 'WishList'} ],
    collection: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Collection'} ],
    password: String
});


const User = mongoose.model('Users', usersSchema);
module.exports = User;