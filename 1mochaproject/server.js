/**
 * Created by Omidleet on 09/05/2017.
 */

var express = require('express');
var port = process.env.PORT || 8080;
var config = require('./config.json');
// maak de applicatie
var app = express();

app.set('PORT', config.webPort);
//start de server
var port = process.env.PORT || app.get('PORT');

app.all('*', function(request, response, next) {
    console.log(request.method + " " + request.url);
    next();
})

app.use('/api/v1', require('./routes/routes_api_v1'));

app.use('/api/v2', require('./routes/routes_api_v2'));

app.get('/', function(request, response) {
    response.send('Hello Avans!');
})

app.get('/about', function(request, response) {
    response.send('Written by Omid Noor');
})

app.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
})

app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
})

app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
})

