require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const session = require('express-session');

const userController = require('./controllers/users');
const vinylController = require('./controllers/vinyl');
const collectionController = require('./controllers/collection');
const wishlistController = require('./controllers/wishlist');
// const sessionsController = require('./controllers/sessions_controller')

const APP = express();
const PORT = process.env.PORT || 3003;
const MONGODB_URI = process.env.MONGODB_URI


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/' + `vinyl`;

mongoose.connect(MONGODB_URI , { useNewUrlParser: true });

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

const whitelist = ['http://localhost:3000', 'https://whispering-everglades-63027.herokuapp.com'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}


APP.get('/', (req, res) => {
    res.send('Hello, Vinyl world!');
});


APP.use(cors(corsOptions))

APP.use(express.json());

// APP.use(
//     session({
//         secret: process.env.SECRET,
//         resave: false,
//         saveUninitialized: false
//     })
// )

APP.use('/users', userController);
APP.use('/vinyl', vinylController);
APP.use('/users/collection', collectionController);
APP.use('/users/wishlist', wishlistController);
// APP.use('/sessions_controller.js', sessionsController);


APP.listen(PORT, () => {
    console.log('🎉🎊', 'Vinyl things happening on port', PORT, '🎉🎊',)
})