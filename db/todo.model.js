const Sequelize = require("sequelize");
const sequelize = require('./config')
const todo = sequelize.define('todos',{
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
        },
    name: {
    type: Sequelize.STRING,
    allowNull: false
    },
    payload:{
        type:Sequelize.BOOLEAN,
        defaultValue:false,
        allowNull:false
    }
});

module.exports = todo
