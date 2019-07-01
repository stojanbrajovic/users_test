const serializeError = require("serialize-error");
const { getUserFromId } = require("./reges");

const getUser = async (req, res) => {
	const { userId } = req.params;

	try {
		const result = await getUserFromId(userId);

		console.log("--------------------------------- ", result);
		res.send(result);
	} catch (e) {
		res.send(serializeError(e));
	}
};

module.exports = getUser;
