const Sequelize = require("sequelize");
const { dbMaria } = require(ROOT_DIR + "/config/db.js");

const UserRole = dbMaria.define("user_role", {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  role_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = UserRole;