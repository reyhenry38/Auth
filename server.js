const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-sessions");

const PORT = process.env.PORT || 8080;

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
    // console.log("listening on port:"+PORT);
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});