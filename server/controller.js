const axios = require("axios");

module.exports = {
    registerUser: async (req, res) => {
        const db = req.app.get("db");
        let {username, password} = req.body;
        
        let user = await db.insert_into_appusers([username, password]);

        res.status(200).send(user);
    },
    loginUser: async (req, res) => {
        const db = req.app.get("db");
        let {username, password} = req.body;

        let user = await db.select_login_appuser([username, password]);

        if(user[0]) {
            res.status(200).send(user);  
        } else {
            res.status(401).send("Unh unh unh...");
        }

            
    }
}
 