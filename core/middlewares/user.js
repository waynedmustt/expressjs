const config = require('../../config')

module.exports = (req, res, next) => {
    if (!req.query || !req.query.fields) {
        next();
        return;
    }

    let userFields = ['id', 'name', 'role', 'created_at'];
    
    if (config && config.userFields) {
        userFields = config.userFields;
    }

    const fields = req.query.fields;
    const fieldArray = fields.split(',');
    let isIncluded = true;
    for (i = 0; i < fieldArray.length; i += 1) {
        if (userFields.indexOf(fieldArray[i]) === -1) {
            isIncluded = false;
            break;
        }
    }

    if (!isIncluded) {
        res.status(500).json({
            status: false,
            message: 'fields are not eligible!'
        });
        return;
    }
    next();
}