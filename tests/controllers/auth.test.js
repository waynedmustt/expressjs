const authController = require('../../controllers/auth');
const authService = require('../../services/auth');

afterEach(() => { 
    jest.clearAllMocks(); 
    jest.resetAllMocks();
});

describe('authController', () => {
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

    it('login : should successfully return data', async () => {
        const result = {
            status: true,
            message: [
                {
                    name: 'admin',
                    role: 'admin'
                }
            ]
        };
        const spy = jest.spyOn(authService, 'login').mockResolvedValue(result);

        const req = {
            body: {
                name: 'admin'
            },
            app: {
                set: jest.fn()
            }
        };
        const res = {
          json: jest.fn((result) => {return result}),
          status: jest.fn(() => res)
        };
        
        const login = await authController.login(req, res);
        const comparison = {
            status: true,
            message: {
                name: 'admin',
                role: 'admin'
            }
        }
        expect(spy).toHaveBeenCalled();
        expect(login).toEqual(comparison);
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