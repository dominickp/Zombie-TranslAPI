var express = require('express');
var markdownTransformer = require('./markdownTransformer');
var Zombify = require('./Zombify');
var UnZombify = require('./UnZombify');
var fs = require('fs');


var app = express();

var port = 7000;

var handleMarkdown = function(filename, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    var file = fs.createReadStream(filename);
    file.pipe(markdownTransformer()).pipe(response);
};

// Logging middleware
app.use(function(req, res, next){
    console.log((new Date()).toString() + " " + req.method + " " + req.url);
    next();
});

// Set headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

app.get('/', function(req, res){
    handleMarkdown('api_index.md', res);
});

app.get('/zombify/:translate', function(req, res){
    var input = req.params.translate;

    // Check for > 1000 characters
    if(input.length > 1000){
        res.status(414);
        res.json({ "status": 414, "message": "Too many characters." });
    }

    // Translate
    var output = {translation: Zombify.zombify(input)};

    res.json(output);
});

app.get('/unzombify/:translate', function(req, res){
    var input = req.params.translate;

    // Check for > 1000 characters
    if(input.length > 1000){
        res.status(414);
        res.json({ "status": 414, "message": "Too many characters." });
    }

    // Translate
    var output = {translation: UnZombify.unzombify(input)};

    res.json(output);
});

app.get('/unzombify/:translate', function(req, res){

});

// Not found, needs to be last
app.get('*', function(req, res){
    res.status(404);
    res.json({ "status": 404, "message": "Resource not found." });
});

app.listen(7000);

console.log('Visit http://localhost:'+port+'/, yo.');