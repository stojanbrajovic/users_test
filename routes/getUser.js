const serializeError = require("serialize-error");
const { getUserFromId } = require("../lib/reges");

const getUser = async (req, res) => {
	const { userId } = req.params;

	try {
		const result = await getUserFromId(userId);
		res.send(result);
	} catch (e) {
		res.send(serializeError(e));
	}
};

module.exports = getUser;
