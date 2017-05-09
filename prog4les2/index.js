/**
 * Created by Omidleet on 03/05/2017.
 */

var http = require('http');
var express = require('express');
var routes_api_v2 = require('./routes/routes_api_v2');

//Create the application
var app = express();

app.set('PORT', config.webPort);

app.all('*', function(request, response, next){
    console.log(request.method + " " + request.url);
    next();
});

app.get('/api/v1/hello', function(request, response, next){
    response.contentType('application/json');
    response.json({
        "msg": "Hello Avans I 1-4"
    })
});

//Start the server
var port = process.env.PORT || app.get('PORT');

app.use('/api/v1', require ('./routes_api_v1'));
app.use('/api/v2', routes_api_v2);


app.listen(8080, function(){
    console.log('The magic happens at http://localhost' + port);
});

module.exports = app;