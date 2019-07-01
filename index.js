const express = require("express");
const https = require("https");
const serializeError = require("serialize-error");
const get = require("./lib/get");

const app = express();

const REGRES_URL = "https://reqres.in/";

const getUser = async (req, response) => {
	const { userId } = req.params;

	console.log(userId);

	try {
		const result = await get(`${REGRES_URL}api/users/${userId}`);
		response.send(result);
	} catch (e) {
		response.send(serializeError(e));
	}
};

app.get("/api/user/:userId", getUser);

app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
});
