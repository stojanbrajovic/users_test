const get = require("./get");

const REGRES_URL = "https://reqres.in/";

module.exports.getUserFromId = async id => get(`${REGRES_URL}api/users/${id}`);

module.exports.getUsersPage = async page =>
	get(`${REGRES_URL}api/users?page={${page}}`);
