const jwt = require('jsonwebtoken');
const isAuth = require('../utils/isAuth')

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error;
    }
    try {
        req.userId = isAuth(authHeader);
    } catch (err) {
        err.statusCode = 403;
        next(err);
    }
    next();
};
