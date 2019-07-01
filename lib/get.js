const https = require("https");

const get = url =>
	new Promise((resolve, reject) => {
		https
			.get(url, res => {
				res.on("data", resolve);
			})
			.on("error", reject);
	});

module.exports = get;
