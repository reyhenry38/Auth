//this is middleware for restricting routes

module.exports = function (req, res, next) {
    if (req.user) {
        return next();
    }
    //if the user isn't logged in go back to the login page
    return res.redirect("/")
}