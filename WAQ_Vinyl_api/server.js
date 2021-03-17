require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const session = require('express-session');

const userController = require('./controllers/users');
const vinylController = require('./controllers/vinyl');
const collectionController = require('./controllers/collection');
const wishlistController = require('./controllers/wishlist');
const sessionsController = require('./controllers/sessions_controller')

const APP = express();
const PORT = process.env.PORT || 3003;
const mongodbURI = process.env.MONGODBURI
const DBNAME = 'vinyl';


mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to the vinyl mongoose')
});

// const whitelist = ['http://localhost:3000']
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }


APP.get('/', (req, res) => {
    res.send('Hello, Vinyl world!');
});


// APP.use(cors(corsOptions))

APP.use(express.json());

APP.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
)

APP.use('/users', userController);
APP.use('/vinyl', vinylController);
APP.use('/users/collection', collectionController);
APP.use('/users/wishlist', wishlistController);
APP.use('/sessions_controller.js', sessionsController);


APP.listen(PORT, () => {
    console.log('🎉🎊', 'Vinyl things happening on port', PORT, '🎉🎊',)
})