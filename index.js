const express = require("express");
const https = require("https");
const serializeError = require("serialize-error");

const app = express();

const BASE_URL = "https://reqres.in/";

const getUser = async (req, res) => {
	const { userId } = req.params;

	console.log(userId);

	try {
		const result = await https.get(`${BASE_URL}api/users/${userId}`);
		res.send(JSON.stringify(result));
	} catch (e) {
		res.send(serializeError(e));
	}
};

app.get("/api/user/:userId", getUser);

app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
});
