const express = require('express');

const APP = express();
const PORT = 3000;


APP.get('/', (req, res) => {
    res.send('Hello, Vinyl world!');
});


APP.listen(PORT, () => {
    console.log('🎉🎊', 'Vinyl things happening on port', PORT, '🎉🎊',)
})