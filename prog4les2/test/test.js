/**
 * Created by Omidleet on 03/05/2017.
 */

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();

chai.use(chaiHttp);

describe('Dit is de eerste test', function(){
    it('Test: GET /api/v1/hello', function(done){
        chai.request(server)
            .get('api/v1/hello')
            .end(function (err, res){
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
        });
    });
});