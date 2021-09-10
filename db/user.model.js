const Sequelize = require('sequelize')
const sequelize = require('./config')
const {comment} = require('./todo.model')

const user = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false,
        maxLength: 10,
        minLength: 3,
        unique:true
    },
    password: {
        type: Sequelize.STRING,
        minLength: 3,
        maxLength: 16,
    }
})
user.hasMany(comment)
comment.belongsTo(user)
module.exports = user