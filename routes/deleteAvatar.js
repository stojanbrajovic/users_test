const fs = require("fs");
const serializeError = require("serialize-error");

const AVATARS_PATH = "avatars/";

const deleteAvatar = async (req, res) => {
	const { userId } = req.params;

	const filePath = `${AVATARS_PATH}${userId}`;

	try {
		if (fs.existsSync(AVATARS_PATH) && fs.existsSync(filePath)) {
			fs.unlinkSync(filePath);
		}

		res.sendStatus(200);
	} catch (e) {
		res.send(serializeError(e));
	}
};

module.exports = deleteAvatar;
