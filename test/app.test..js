const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

const app = require('../src/app');

process.env.NODE_ENV = 'test';

describe('API', () => {

    describe('#GET /health', () => {
        it('should GET status code 200', done => {
            chai.request(app)
                .get('/')
                .end((error, res) => {
                    expect(res.statusCode).to.be.equal(200)
                    done()
                });
        });
    });

    describe('#GET /', () => {
        it('should contain string "My ip is"', done => {
            chai.request(app)
                .get('/')
                .end((error, res) => {
                    expect(res.text).to.include('My ip is')
                    done()
                });
        });
    }); 

});