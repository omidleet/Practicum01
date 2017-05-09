/**
 * Created by Omidleet on 09/05/2017.
 */

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

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

