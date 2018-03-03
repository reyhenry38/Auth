const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-sessions")


const PORT = process.env.PORT || 9000;

let app = express();

app.use (bodyParser.urlencoded({ extended:true }));
app.use (bodyParser.json());

app.use(express.static("public"));

app.use(PORT, ()=>{
    console.log(`listening on port : ${PORT})`)
})

