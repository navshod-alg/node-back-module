const Sequelize = require("sequelize");
const { dbMaria } = require(ROOT_DIR + "/config/db.js");

const userPrivilege = dbMaria.define("user_privilege", {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  privilege_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = userPrivilege;