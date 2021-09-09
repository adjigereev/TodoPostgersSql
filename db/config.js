const Sequelize = require("sequelize");


const sequelize = new Sequelize("TodoList", "postgres", "admin", {
    dialect: "postgres",
    host: "localhost",
    define: {
      timestamps: false
    }
  });
module.exports = sequelize 