
const userService = require('../services/user'),
    User = require('../core/models/user'),
    userController = {
        getAll: async (req, res) => {
            const promise = await userService.getAll(req, res)
            .then(res => {
                return res;
            })
            .catch(err => {
                return err;
            });

            if (!promise.status) {
                res.status(500).json(promise.message);
                return;
            }
            res.status(200).json(promise.message);
        },
        getById: async (req, res) => {
            if (!req.params || !req.params.userId) {
                res.status(400).json({
                    status: false,
                    message: 'User ID params not found!'
                });
                return;
            }

            const promise = await userService.getById(req, res)
            .then(res => {
                if (res.message.length === 0) {
                    return {status: true, message: 'user that you requested does not exist'}
                }
                return res;
            })
            .catch(err => {
                return err;
            });

            if (!promise.status) {
                res.status(500).json(promise);
                return;
            }
            res.status(200).json(promise);
        },
        create: async (req, res) => {
            const newUser = new User(req.body);
            if (newUser.name === '' || newUser.role === '') {
                res.status(400).json({
                    status: false,
                    message: 'fields are empty!'
                });
                return;
            }

            const promise = await userService.create(newUser, res)
            .then(res => {
                return res;
            })
            .catch(err => {
                return err;
            });

            if (!promise.status) {
                res.status(500).json(promise);
                return;
            }
            res.status(200).json(promise);
        },
        update: async (req, res) => {
            if (!req.params || !req.params.userId) {
                res.status(400).json({
                    status: false,
                    message: 'User ID params not found!'
                });
                return;
            }
            const promise = await userService.update(new User(req.body), req.params.userId, res)
            .then(res => {
                return res;
            })
            .catch(err => {
                return err;
            });

            if (!promise.status) {
                res.status(500).json(promise);
                return;
            }
            res.status(200).json(promise);
        },
        remove: async (req, res) => {
            if (!req.params || !req.params.userId) {
                res.status(400).json({
                    status: false,
                    message: 'User ID params not found!'
                });
                return;
            }
            const promise = await userService.remove(req.params.userId, res)
            .then(res => {
                return res;
            })
            .catch(err => {
                return err;
            });

            if (!promise.status) {
                res.status(500).json(promise.message);
                return;
            }
            res.status(200).json(promise.message);
        },
    };

module.exports = userController;