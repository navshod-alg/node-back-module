const Sequelize = require("sequelize");
const { dbMaria } = require(ROOT_DIR + "/config/db.js");

const User = dbMaria.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  username: {
  	type: Sequelize.STRING,
  	//unique: true,
  	allowNull: false
  },
  password: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  email: {
  	type: Sequelize.STRING,
  	// unique: true,
  	allowNull: false
  }
});

module.exports = User;