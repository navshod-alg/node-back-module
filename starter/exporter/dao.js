const userDAO = require(ROOT_DIR + "/module/user/user.dao");
const roleDAO = require(ROOT_DIR + "/module/role/dao/role.dao");
const userRoleDAO = require(ROOT_DIR + "/module/role/dao/user_role.dao");
const privilegeDAO = require(ROOT_DIR + "/module/privilege/dao/privilege.dao");
const userPrivilegeDAO = require(ROOT_DIR + "/module/privilege/dao/user_privilege.dao");

module.exports = {
	userDAO,
	roleDAO,
	userRoleDAO,
	privilegeDAO,
	userPrivilegeDAO
}