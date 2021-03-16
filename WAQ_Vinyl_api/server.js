const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');

const userController = require('./controllers/users');
const vinylController = require('./controllers/vinyl');
const collectionController = require('./controllers/collection');

const APP = express();
const PORT = 3003;
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

APP.use('/users', userController);
APP.use('/vinyl', vinylController);
APP.use('/users/collection', collectionController);


APP.listen(PORT, () => {
    console.log('🎉🎊', 'Vinyl things happening on port', PORT, '🎉🎊',)
})