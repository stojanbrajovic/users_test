const { getUserFromId, getUsersPage, REGRES_URL } = require("../reges");
const get = require("../get");
jest.mock("../get");

describe("test reges functions", () => {
	test("get user", () => {
		const id = 5;
		getUserFromId(id);
		expect(get).toHaveBeenCalledWith(`${REGRES_URL}/${id}`);
	});

	test("get users from page", () => {
		const page = 1;
		getUsersPage(page);
		expect(get).toHaveBeenCalledWith(`${REGRES_URL}?page={${page}}`);
	});
});
