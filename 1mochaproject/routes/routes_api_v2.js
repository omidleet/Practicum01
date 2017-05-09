/**
 * Created by Omidleet on 09/05/2017.
 */

// API versie 2
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/help', function(request, response){
    response.status(200);
    response.json({
        "description" : "Help function not available yet"
    });
})

router.get('*', function(request, response){
    response.status(200);
    response.json({
        "description" : "404 - Not supported"
    });
})

module.exports = router;
