const {
    comment
    , commentOnComment
    , todo
} = require("../db/todo.model");

class Todos {
    async addTodo(req, res) {
        try {
            await todo.create({
                name: req.body.name
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
                    model: comment, required: false,
                    include:comment
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
        const userId = req.params.id
        todo.destroy({where: {id: userId}}).then(() => {
            res.sendStatus(200)
        }).catch(err => console.log(err))
    }
}

module.exports = new Todos()