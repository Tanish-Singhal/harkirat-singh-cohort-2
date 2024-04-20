const { Admin } = require("../db/index")

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    // checking if the given username is already present in the admin database
    Admin.findOne({
        username: username,
        password: password
    })
        .then(function(value) {
            if (value) {
                next();
            }
            else {
                res.status(403).json({
                    msg: "Admin doesn't exit"
                })
            }
        })
}

module.exports = adminMiddleware;