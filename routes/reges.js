const get = require("../lib/get");

const REGRES_URL = "https://reqres.in/";

module.exports.getUserFromId = async id => get(`${REGRES_URL}api/users/${id}`);
