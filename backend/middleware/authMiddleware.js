const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('A token is required for authentication');

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(401).send('Invalid Token');
        req.user = user; // Save the user information in request for later use
        next();
    });
};

module.exports = authMiddleware;
