const db = require('../core/db'),
    userService = {
        getAll: (req, res) => {
            return new Promise(
                (resolve, reject) => {   
                    db.query('SELECT * from users', (err, res) => {
                        if (err) {
                            reject({status: false, message: err});
                            return;
                        }
            
                        resolve({status: true, message: res});
                    });
                },
            );
        },
        getById: (req, res) => {
            return new Promise(
                (resolve, reject) => {   
                    db.query('SELECT * from users where id = ?', [req.params.userId], (err, res) => {
                        if (err) {
                            reject({status: false, message: err});
                            return;
                        }
            
                        resolve({status: true, message: res});
                    });
                },
            );
        },
        create: (body, res) => {
            return new Promise(
                (resolve, reject) => {   
                    db.query('INSERT INTO users set ?', [body], (err, res) => {
                        if (err) {
                            reject({status: false, message: err});
                            return;
                        }
            
                        resolve({status: true, message: 'User successfully created!'});
                    });
                },
            );
        },
        update: (body, id, res) => {
            return new Promise(
                (resolve, reject) => {   
                    db.query('UPDATE users SET name = ?, role = ? WHERE id = ?', [body.name, body.role, id], (err, res) => {
                        if (err) {
                            reject({status: false, message: err});
                            return;
                        }

                        if (res.changedRows === 0) {
                            resolve({status: true, message: 'There was problem when do update!'});
                            return;
                        }
            
                        resolve({status: true, message: `User with ID: ${id} successfully updated!`});
                    });
                },
            );
        },
        remove: (id, res) => {
            return new Promise(
                (resolve, reject) => {   
                    db.query('DELETE FROM users WHERE id = ?', [id], (err, res) => {
                        if (err) {
                            reject({status: false, message: err});
                            return;
                        }
            
                        resolve({status: true, message: `User with ID: ${id} successfully deleted!`});
                    });
                },
            );
        },
    };

module.exports = userService;