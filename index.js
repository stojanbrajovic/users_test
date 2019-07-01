const express = require("express");
const getUser = require("./routes/getUser");
const getAvatar = require("./routes/getAvatar");

const app = express();

const USER_URL = "/api/user/:userId";

app.get(USER_URL, getUser);
app.get(`${USER_URL}/avatar`, getAvatar);

app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
});
