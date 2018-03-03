const db = require("../models");
const passport = require("../config/passport.js");

module.exports = function (app) {
    app.post("api/login", passport.authenticate("local"), (req, res) => {
        res.json("/members");
    });

    app.post("api/signup", (req, res) => {
        console.log(req.body);
        db.User.create({
            email: req.body.email,
            password: req.body.password
        }).then(() => {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
    });


};

//Routes for logging out

