const fs = require("fs");
const serializeError = require("serialize-error");
const get = require("../lib/get");
const { getUserFromId } = require("../lib/reges");

const AVATARS_PATH = "avatar";

const getAvatar = async (req, res) => {
	const { userId } = req.params;

	try {
		const filePath = `${AVATARS_PATH}${userId}`;
		let avatarBase64 = null;
		try {
			avatarBase64 = fs.readFileSync(filePath);
		} catch {}

		if (!avatarBase64) {
			const userBuffer = await getUserFromId(userId);
			const user = JSON.parse(userBuffer).data;
			const { avatar } = user;

			avatarBase64 = await get(avatar);
			fs.writeFileSync(filePath, avatarBase64);
		}

		res.send(avatarBase64);
	} catch (e) {
		res.send(serializeError(e));
	}
};

module.exports = getAvatar;
