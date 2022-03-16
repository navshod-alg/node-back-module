const {dbMaria} = require(ROOT_DIR + "/config/db.js");

// const {roleDAO, privilegeDAO, userRoleDAO, userPrivilegeDAO} = require(ROOT_DIR + "/starter/exporter/dao");

// async function accessCheck(userId, path, method, access){
// 	try {
// 		let t = await dbMaria.transaction();
// 		let roles = {};
// 		let privileges = {};
// 		await userRoleDAO.findAll({where: {user_id: userId}, transaction: t, attributes: ['role_id']})
// 		.then(async roleIDS => {
// 			roleIDS = roleIDS.map(roleID => roleID = roleID["role_id"]);
// 			roles = await roleDAO.findAll({where: {id: roleIDS}, transaction: t, attributes: ['name']});
// 		});
// 		await userPrivilegeDAO.findAll({where: {user_id: userId}, transaction: t, attributes: ['privilege_id']})
// 		.then(async privilegeIDS => {
// 			privilegeIDS = privilegeIDS.map(privilegeID => privilegeID = privilegeID["privilege_id"]);
// 			privileges = await privilegeDAO.findAll({where: {id: privilegeIDS}, transaction: t, attributes: ['name']});
// 		});
// 		return async function(req, res, next){
// 			access.forEach(route => {
// 				if(route.path == path && route.method == method){
// 					roles.forEach(role => {
// 						if(route.roles.includes(role)) return "yes";
// 					})
// 					privileges.forEach(privilege => {
// 						if(route.privileges.includes(privilege)) return "yes";
// 					})
// 				}
// 				return "no";
// 			})
// 		}
// 	} catch(error){
// 		console.log(error)
// 	}
// }

module.exports = accessCheck;