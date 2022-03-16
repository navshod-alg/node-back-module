const endPoints = [
	{
		url: "/api/auth",
		route: ROOT_DIR + "/module/auth/auth.route.js",
		middlewares: [

		],
	},
	{
		url: "/api/user",
		route: ROOT_DIR + "/module/user/user.route.js",
		middlewares: [

		],
	},
	{
		url: "/api/role",
		route: ROOT_DIR + "/module/role/role.route.js",
		middlewares: [

		],
	},
	{
		url: "/api/privilege",
		route: ROOT_DIR + "/module/privilege/privilege.route.js",
		middlewares: [

		],
	},
	// {
	// 	url: "/api/admin",
	// 	route: ROOT_DIR + "/module/admin/admin.route.js",
	// 	middlewares: [

	// 	],
	// },
]

module.exports = endPoints;