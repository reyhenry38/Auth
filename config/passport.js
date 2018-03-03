const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
    function (email, password, done) {
        db.User.findOne({
            where: {
                email: email
            }
        }).then((dbUser) => {
            //if there is no user with the given email 
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect email"
                });
            }
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password"
                });
            }
            return done(null, dbUser);
        }
        )
    }
));

passport.serializeUser(function (user, cb) {
    cb(null, obj);
});

passport.deserializeUser(function (id, cb) {
    cb(null, obj);
});

//export the passport
module.exports = passport;