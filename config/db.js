const Sequelize = require("sequelize");

const dbMaria = new Sequelize("node-back-module", "progitdev", "animemanga961", {
  dialect: "mariadb",
  host: "localhost",
  port: 3306,
  logging: true,
  define: {
    freezeTableName: true
  }
});

module.exports= {
	dbMaria
};
