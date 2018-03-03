const path = require("path");

const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    app.get("/", (req, res) => {

        if (req.user) {
            res.redirect('/members');
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get("/login", function (req, res) {
        if (req.user) {
            res.redirect('/members');
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/members", isAuthenticated, (req, res) => {
        res.sendFile(path.join(__dirname, "../public/members.html"));
    })
}
