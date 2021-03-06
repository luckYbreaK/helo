require("dotenv").config();
const express = require("express"),
    bodyParser = require("body-parser"),
    massive = require("massive"),
    session = require("express-session"),
    controller = require("./controller");  

const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

// MIDDLEWARE
app.use(bodyParser.json());
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));


// ENDPOINTS
app.post("/api/auth/register", controller.registerUser);
app.post("/api/auth/login", controller.loginUser)
app.get("/api/posts/:userid", controller.getPosts)
// app.get("/api/post/:postid")

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);

    app.listen(SERVER_PORT, () => {
        console.log(`Cruisin' on port: ${SERVER_PORT}`);
    })
});

