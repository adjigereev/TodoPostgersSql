const {
    comment,
    todo
} = require("../db/todo.model");
const user = require('../db/user.model')

class Todos {
    async addTodo(req, res) {
        try {
            await todo.create({
                name: req.body.name,
                UserId:req.user.id
            })
        } catch (error) {
            res.json(error.msg).status(500)
        }
        res.sendStatus(201)
    }

    async allTodo(req, res) {
        todo.findAll({
            include: [
                {
                    model: user,
                    attributes:{exclude:['password']}
                },
            ],
        })
            .then((data) => {
                res.json(data).status(200)
            })
    }

    async editTodo(req, res) {
        const userId = req.params.id
        const todos = await todo.findOne({where: {id: userId}})
        todo.update({payload: !todos.dataValues.payload}, {where: {id: userId}}).then((data) => res.json(data).status(200)).catch(err => console.log(err))
    }

    async deleteTodo(req, res) {
        const todoId = req.params.id
        if(todo.UserId === req.user.id){
            todo.destroy({where: {id: todoId}}).then(() => {
                res.sendStatus(200)
            }).catch(err => console.log(err))
        }else{
            res.json("У вас нет прав на удаление данной задани").status(403)
        }
    }
}

module.exports = new Todos()