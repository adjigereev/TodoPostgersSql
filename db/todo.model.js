const Sequelize = require("sequelize");
const sequelize = require('./config')
const todo = sequelize.define('todos', {
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
const comment = sequelize.define('comment',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})

todo.hasMany(comment , { onDelete: "cascade" })
comment.belongsTo(todo)


module.exports = {
    todo,
    comment
}
