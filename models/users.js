const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema({
    username: String ,
    wishlist: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Vinyl'} ],
    myCollection: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Vinyl'} ],
    password: String
});


const User = mongoose.model('Users', usersSchema);
module.exports = User;