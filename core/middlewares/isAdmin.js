// This is ONLY EXAMPLE OF HOW WE USE AUTHENTICATED USER IN MIDDLEWARE
// DO NOT IMPLEMENT THIS IN REAL WORLD.

module.exports = (req, res, next) => {
    if (process.env.NODE_ENV === 'test') {
        next();
        return;
    }
    const userLoggedIn = req.app.get('authenticatedUser');
    if (userLoggedIn && userLoggedIn.role === 'admin') {
        next();
        return;
    }

    res.status(401).json({
        status: false,
        message: 'Unauthorized'
    });
}