const accessCheck = require(ROOT_DIR + "/middlewares/accessCheck");
const paginationExtractor = require(ROOT_DIR + "/middlewares/paginationExtractor");
const authValid = require(ROOT_DIR + "/middlewares/authValid");

module.exports = {
	accessCheck,
	paginationExtractor,
	authValid
}