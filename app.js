const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));
app.use(express.static('pages'));

// app.use(express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/pages/views/index.html'));
});

app.get('/schedule', function(req, res) {
    res.sendFile(path.join(__dirname, '/pages/views/schedule.html'));
});
const PORT = 3000;

app.listen(PORT, () => {
console.log("app is running on port: ",PORT)
});