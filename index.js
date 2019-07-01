const express = require("express");
const cron = require("node-cron");
const getUser = require("./routes/getUser");
const getAvatar = require("./routes/getAvatar");
const deleteAvatar = require("./routes/deleteAvatar");
const appendUsers = require("./tasks/appendUsers");

const app = express();

const USER_URL = "/api/user/:userId";

app.get(USER_URL, getUser);
app.get(`${USER_URL}/avatar`, getAvatar);
app.delete(`${USER_URL}/avatar`, deleteAvatar);

cron.schedule("* * * * *", appendUsers);

app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
});
