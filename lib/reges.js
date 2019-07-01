const get = require("./get");

const REGRES_URL = "https://reqres.in/api/users";

module.exports.REGRES_URL = REGRES_URL;

module.exports.getUserFromId = async id => get(`${REGRES_URL}/${id}`);

module.exports.getUsersPage = async page => get(`${REGRES_URL}?page={${page}}`);
