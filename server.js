const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport");

const PORT = process.env.PORT || 8080;

let app = express();
const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use(session({
    secret: "keyboard cat", resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

//require our routes 
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port: ${PORT}`)
    })
})