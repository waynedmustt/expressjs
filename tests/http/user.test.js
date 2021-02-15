
const request = require('supertest');
const app = require('../../index');

afterEach(() => { 
    jest.clearAllMocks(); 
    jest.resetAllMocks();
});

describe('User', () => {
    it('GET /users : should return 200 response code', (done) => {
        request(app)
            .get('/users')
            .then(response => {
                expect(response.status).toBe(200);
                done();
            })
    })

    it('GET /users/:userId : should return 200 response code', (done) => {
        request(app)
            .get('/users/1')
            .then(response => {
                expect(response.status).toBe(200);
                done();
            })
    })

    it('POST /users : should return 400 response code without body', (done) => {
        request(app)
            .post('/users')
            .then(response => {
                expect(response.status).toBe(400);
                done();
            })
    })

    // it('POST /users : should return 200 response code with body', (done) => {
    //     request(app)
    //         .post('/users')
    //         .send({name: 'admin', role: 'admin'})
    //         .then(response => {
    //             expect(response.status).toBe(200);
    //             done();
    //         })
    // })

    it('PUT /users : should return 200 response code', (done) => {
        request(app)
            .put('/users/1')
            .then(response => {
                expect(response.status).toBe(200);
                done();
            })
    })

    it('DEL /users : should return 200 response code', (done) => {
        request(app)
            .delete('/users/1')
            .then(response => {
                expect(response.status).toBe(200);
                done();
            })
    })
})