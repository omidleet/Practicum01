var express = require('express');
var app = express();
var PORT = 3000;
var aboutPost = "Posted by Omid";

app.get('/', function(request, response) {
    response.send('Hello Avans!');
})
app.get('/about', function(request, response) {
    response.send('Written by Omid');
})

app.post('/about', function(request, response) {
    response.send(aboutPost);
})

app.post('/', function(request, response) {
    response.send('Hello Avans, POST request received!');
})
app.put('/', function(request, response) {
    response.send('Hello Avans, PUT request received!');
})

app.all('*', function(request, response) {
    response.status(404);
    response.send('404 - Not found');
})

app.listen(PORT, function() {
    console.log('Server app is listening on port ' + PORT + '.');
})