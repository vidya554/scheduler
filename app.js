
const http = require('http');
const fs = require('fs').promises;

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        fs.readFile(__dirname + "/pages/views/index.html")
        .then(contents => {
            res.setHeader("Content-type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    
    }
    else if (req.url == '/registration') {
        
        fs.readFile(__dirname + "/pages/views/index.html")
        .then(contents => {
            res.setHeader("Content-type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    
    }
    else if (req.url == '/about') {
        
        fs.readFile(__dirname + "/pages/views/index.html")
        .then(contents => {
            res.setHeader("Content-type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    
    }
    else
        res.end('Invalid Request!');

});
const port = 8000;
const host = 'localhost';


server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});