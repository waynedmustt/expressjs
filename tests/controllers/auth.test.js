const authController = require('../../controllers/auth');
const authService = require('../../services/auth');

afterEach(() => { 
    jest.clearAllMocks(); 
    jest.resetAllMocks();
});

describe('userController', () => {
    it('login : should show error message when returned data is empty', async () => {
        const result = {
            status: true,
            message: []
        };
        const spy = jest.spyOn(authService, 'login').mockResolvedValue(result);

        const req = {
            body: {
                name: 'admin'
            }
        };
        const res = {
          json: jest.fn((result) => {return result}),
          status: jest.fn(() => res)
        };
        
        const login = await authController.login(req, res);
        expect(spy).toHaveBeenCalled();
        expect(login).toEqual({
            status: true,
            message: 'wrong username or password!'
        });
    });

    it('login : should show error message without payload', async () => {
        const result = {
            status: true,
            message: []
        };
        const spy = jest.spyOn(authService, 'login').mockResolvedValue(result);

        const req = {};
        const res = {
          json: jest.fn((result) => {return result}),
          status: jest.fn(() => res)
        };
        
        const login = await authController.login(req, res);
        expect(spy).not.toHaveBeenCalled();
        expect(login).toEqual({
            status: false,
            message: 'fields are not available!'
        });
    });

    it('logout : should successfully show data', async () => {
        const req = {
            app: {
                set: jest.fn()
            }
        };
        const res = {
          json: jest.fn((result) => {return result}),
          status: jest.fn(() => res)
        };
        
        const login = await authController.logout(req, res);
        expect(login).toEqual({
            status: true,
            message: 'successfully logout!'
        });
    });
})