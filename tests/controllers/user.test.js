const userController = require('../../controllers/user');
const userService = require('../../services/user');

afterEach(() => { 
    jest.clearAllMocks(); 
    jest.resetAllMocks();
});

describe('userController', () => {
    it('getAll : should successfully return data', async () => {
        const result = {
            status: true,
            message: [{
                name: 'admin',
                role: 'admin'
            }]
        };
        const spy = jest.spyOn(userService, 'getAll').mockResolvedValue(result);

        const req = {};
        const res = {
          json: jest.fn((result) => {return result}),
          status: jest.fn(() => res)
        };
        
        const getAll = await userController.getAll(req, res);
        expect(spy).toHaveBeenCalled();
        expect(getAll).toEqual(result);
    });

    it('getById : should show error message when user does not exist', async () => {
        const result = {
            status: true,
            message: []
        };
        const spy = jest.spyOn(userService, 'getById').mockResolvedValue(result);

        const req = {
            params: {
                userId: 1
            }
        };
        const res = {
            json: jest.fn((result) => {return result}),
            status: jest.fn(() => res)
        };
        
        const getById = await userController.getById(req, res);
        expect(spy).toHaveBeenCalled();
        expect(getById).toEqual({
            status: true,
            message: 'user that you requested does not exist'
        });
    });

    it('getById : should successfully return data', async () => {
        const result = {
            status: true,
            message: [{
                name: 'admin',
                role: 'admin'
            }]
        };
        const spy = jest.spyOn(userService, 'getById').mockResolvedValue(result);

        const req = {
            params: {
                userId: 1
            }
        };
        const res = {
            json: jest.fn((result) => {return result}),
            status: jest.fn(() => res)
        };
        
        const getById = await userController.getById(req, res);
        expect(spy).toHaveBeenCalled();
        expect(getById).toEqual(result);
    });

    it('create : should show error message without incomplete payload', async () => {
        const result = {
            status: false,
            message: 'fields are empty!'
        };
        const spy = jest.spyOn(userService, 'create').mockResolvedValue({});

        const req = {
            body: {
                name: 'admin',
            }
        };
        const res = {
            json: jest.fn((result) => {return result}),
            status: jest.fn(() => res)
        };
        
        const create = await userController.create(req, res);
        expect(spy).not.toHaveBeenCalled();
        expect(create).toEqual(result);
    });

    // it('create : should show successfully create data', async () => {
    //     const result = {
    //         status: true,
    //         message: 'user successfully created!'
    //     };
    //     const spy = jest.spyOn(userService, 'create').mockResolvedValue(result);

    //     const req = {
    //         body: {
    //             name: 'admin',
    //             role: 'admin'
    //         }
    //     };
    //     const res = {
    //         json: jest.fn((result) => {return result}),
    //         status: jest.fn(() => res)
    //     };
        
    //     const create = await userController.create(req, res);
    //     expect(spy).toHaveBeenCalled();
    //     expect(create).toEqual(result);
    // });

    it('update : should show successfully update data', async () => {
        const result = {
            status: true,
            message: 'user successfully updated!'
        };
        const spy = jest.spyOn(userService, 'update').mockResolvedValue(result);

        const req = {
            params: {
                userId: 1
            }
        };
        const res = {
            json: jest.fn((result) => {return result}),
            status: jest.fn(() => res)
        };
        
        const update = await userController.update(req, res);
        expect(spy).toHaveBeenCalled();
        expect(update).toEqual(result);
    });

    it('remove : should show successfully remove data', async () => {
        const result = {
            status: true,
            message: 'user successfully removed!'
        };
        const spy = jest.spyOn(userService, 'remove').mockResolvedValue(result);

        const req = {
            params: {
                userId: 1
            }
        };
        const res = {
            json: jest.fn((result) => {return result}),
            status: jest.fn(() => res)
        };
        
        const remove = await userController.remove(req, res);
        expect(spy).toHaveBeenCalled();
        expect(remove).toEqual(result);
    });
})