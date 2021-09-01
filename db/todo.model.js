const Sequelize = require("sequelize");
const sequelize = require('./config')
const todo = sequelize.define('Todos', {
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
    payload: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
});
const comment = sequelize.define('Comment', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

todo.hasMany(comment, {onDelete: 'cascade'})
comment.belongsTo(todo)

comment.belongsTo(comment)
module.exports = {
    todo,
    comment,
}
