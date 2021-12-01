const {
    todo, comment
} = require("../db/todo.model");
const user = require('../db/user.model')
const examination = require("../middleware/userMiddleware");

class Todos {
    async addTodo(req, res) {
        try {
            await todo.create({
                name: req.body.name,
                UserId: req.user.id
            })
        } catch (error) {
            res.json(error.msg).status(500)
        }
        res.sendStatus(201)
    }

    async allTodo(req, res) {
        let todos = await todo.findAll({
            include: [
                {
                    model: user,
                    attributes: {exclude: ['password']},
                },
            ],
        })
        res.json(todos).status(200)
    }

    async editTodo(req, res) {
        const userId = req.params.id
        const todos = await todo.findOne({where: {id: userId}})
        try {
            let editTodo = await todo.update({payload: !todos.dataValues.payload}, {where: {id: userId}})
            res.json(editTodo).status(200)
        } catch (e) {
            res.json(e.message).status(500)
        }
    }

    async deleteTodo(req, res) {
        const todoId = req.params.id
        try {
            await todo.destroy({where: {id: todoId}})
            res.sendStatus(200)
        } catch (e) {
            res.json(e.message).status(500)
        }
    }
}

module.exports = new Todos()