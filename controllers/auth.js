
const authService = require('../services/auth'),
    authController = {
        login: async (req, res) => {
            if (!req.body || !req.body.name) {
                return res.status(400).json({
                    status: false,
                    message: 'fields are not available!'
                });
            }

            const promise = await authService.login(req, res)
            .then(res => {
                if (res.message.length === 0) {
                    return {status: true, message: 'wrong username or password!'}
                }

                const user = res.message[0];

                // This is ONLY EXAMPLE OF HOW WE STORE USER AUTHENTICATION
                // DO NOT IMPLEMENT THIS IN REAL WORLD.
                req.app.set('authenticatedUser', user);
                req.app.set('isAuthenticated', true);

                return {status: true, message: user};
            })
            .catch(err => {
                return err;
            });

            if (!promise.status) {
                 return res.status(500).json(promise);
            }
            
            return res.status(200).json(promise);
        },
        logout: (req, res) => {
            req.app.set('authenticatedUser', null);
            req.app.set('isAuthenticated', false);

            return res.status(200).json({
                status: true,
                message: 'successfully logout!'
            });
        }
    };

module.exports = authController;