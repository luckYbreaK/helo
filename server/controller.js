const axios = require("axios");

module.exports = {
    registerUser: async (req, res) => {
        const db = req.app.get("db");
        let { username, password } = req.body;

        let user = await db.insert_into_appusers([username, password]);

        res.status(200).send(user);
    },
    loginUser: async (req, res) => {
        const db = req.app.get("db");
        let { username, password } = req.body;

        let user = await db.select_login_appuser([username, password]);

        if (user[0]) {
            res.status(200).send(user);
        } else {
            res.status(401).send("Unh unh unh...");
        }
    },
    getPosts: async (req, res) => {
        const db = req.app.get("db");

        let userId = Number(req.params.userid);
        let { userposts, search } = req.query;
        let posts = [];

        if (userposts === "true" && search) {
            posts = await db.select_posts_user_withsearch([`%${search}%`]);
        } else if(userposts === "true" && search === undefined) {
            posts = await db.select_posts_user_nosearch();
        } else if(userposts === "false" && search) {
            posts = await db.select_posts_otherusers_withsearch([userId, `%${search}%`]);
        } else if(userposts === "false" && search === undefined) {
            posts = await db.select_posts_otherusers_nosearch([userId]);
        }

        res.status(200).send(posts);
    }
}
