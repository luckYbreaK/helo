require("dotenv").config();
const express = require("express"),
    bodyParser = require("body-parser"),
    massive = require("massive");
    controller = require("./controller");  

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

// MIDDLEWARE
app.use(bodyParser.json());


// ENDPOINTS
app.post("/api/auth/register", controller.registerUser);

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);

    app.listen(SERVER_PORT, () => {
        console.log(`Cruisin' on port: ${SERVER_PORT}`);
    })
});

