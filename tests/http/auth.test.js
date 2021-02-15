
const request = require('supertest');
const app = require('../../index');

afterEach(() => { 
    jest.clearAllMocks(); 
    jest.resetAllMocks();
});

describe('Auth', () => {
    it('POST /auth/login : should return 200 response code', (done) => {
        request(app)
            .post('/auth/login')
            .send({name: 'admin'})
            .then(response => {
                expect(response.status).toBe(200);
                done();
            })
    })

    it('POST /auth/login : should return 400 response code', (done) => {
        request(app)
            .post('/auth/login')
            .then(response => {
                expect(response.status).toBe(400);
                done();
            })
    })

    it('GET /logout : should return 200 response code', (done) => {
        request(app)
            .get('/auth/logout')
            .then(response => {
                expect(response.status).toBe(200);
                done();
            })
    })
})