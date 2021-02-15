// This is ONLY EXAMPLE OF HOW WE USE AUTHENTICATED USER IN MIDDLEWARE
// DO NOT IMPLEMENT THIS IN REAL WORLD.

module.exports = (req, res, next) => {
    if (process.env.NODE_ENV === 'test') {
        next();
        return;
    }
    if (req.app.get('isAuthenticated')) {
        next();
        return;
    }

    res.status(401).json({
        status: false,
        message: 'Unauthorized'
    });
}