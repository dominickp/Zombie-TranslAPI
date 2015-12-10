var express = require('express');
var markdownTransformer = require('./markdownTransformer');
var buz = require('./Zombify.js');
var fs = require('fs');


var app = express();

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

app.get('/hello', function(req, res){

    res.send('hello');
    res.end();
});

app.get('/zombify/:translate', function(req, res){
    var input = req.params.translate;

    // Check for > 1000 characters
    if(input.length > 1000){
        res.status(414);
        res.end();
    }

    // Translate
    //var Zombee = new Zombify();

    //var Zombify = new Zombify();
    buz.log();
    var output = buz.zombify(input);

    res.end(output);
});

app.get('/unzombify/:translate', function(req, res){

});

app.listen(7000);