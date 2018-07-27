const axios = require("axios");

module.exports = {
    registerUser: async (req, res) => {
        const db = req.app.get("db");
        let {username, password} = req.body;
        
        let user = await db.insert_into_appusers([username, password])

        res.status(200).send(user);
    }
}
 