const fs = require("fs");
const { getUsersPage } = require("../lib/reges");

const FILE_NAME = "users.json";

let page = -1;

if (fs.existsSync(FILE_NAME)) {
	fs.unlinkSync(FILE_NAME);
}

const appendUsers = async () => {
	const users = [];

	if (fs.existsSync(FILE_NAME)) {
		const fileBuffer = fs.readFileSync(FILE_NAME);
		const fileContents = JSON.parse(fileBuffer);
		users.push(...fileContents);
	}

	page++;

	console.log("appending Users from page " + page);
	const usersBuffer = await getUsersPage(page);
	const pageUsers = JSON.parse(usersBuffer).data;

	users.push(...pageUsers);

	fs.writeFileSync(FILE_NAME, JSON.stringify(users));
};

module.exports = appendUsers;
