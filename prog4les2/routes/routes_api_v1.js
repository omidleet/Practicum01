/**
 * Created by Omidleet on 03/05/2017.
 */
// API versie 1
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('*', function(request, response){
    response.status(200);
    response.json({
        "description" : "API version 1. Please use API version 2."
    });
});

module.exports = router;