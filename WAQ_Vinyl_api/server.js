const express = require('express');
const mongoose = require('mongoose');

const APP = express();
const PORT = 3003;
const DBNAME = 'vinyl';


mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to the vinyl mongoose')
});


APP.get('/', (req, res) => {
    res.send('Hello, Vinyl world!');
});


APP.use(express.json());

APP.listen(PORT, () => {
    console.log('🎉🎊', 'Vinyl things happening on port', PORT, '🎉🎊',)
})