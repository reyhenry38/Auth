const db = require ("../models");

const passport = require("../config/passport");

module.exports = function (app) {
    app.post("api/login", passport.authenticate("local"), (req, res)=>{
        res.json("/members");
    });
}