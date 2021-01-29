const db = require('../core/db'),
    authService = {
        login: (req, res) => {
            return new Promise(
                (resolve, reject) => { 
                    let statement = 'SELECT * from users where name = ?';
                
                    db.query(statement, [req.body.name], (err, res) => {
                        if (err) {
                            reject({status: false, message: err});
                            return;
                        }

                        resolve({status: true, message: res});
                    });
                },
            );
        }
    }

module.exports = authService;