const {comment} = require('../db/todo.model')

class CommentController {
    async addComment(req, res) {
        try {
            comment.create({
                description: req.body.description,
                TodoId: req.body.TodoId,
                CommentId: req.body.CommentId
            }).then((data) => res.json(data).status(201))
        } catch (e) {
            res.json(e.message).status(500)
        }
    }

    allComment(req, res) {
        comment.findAll({}).then(data => res.json(data))
    }
}

module.exports = new CommentController()