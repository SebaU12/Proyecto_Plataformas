const jwt = require('jsonwebtoken');

function checkAuth(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]; //get token
        console.log(token);
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decodedToken;
        next();
    } catch (error) {
        console.log("pala");
        return res.status(401).json({
            message: "Invalid or expired token admin",
            error: error
        });
    }
}

module.exports = {
    checkAuth: checkAuth
}
