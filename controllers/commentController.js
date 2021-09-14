const {comment} = require('../db/todo.model')

class CommentController {
    async addComment(req, res) {
        try {
         let newComment = await   comment.create({
                description: req.body.description,
                TodoId: req.body.TodoId,
                CommentId: req.body.CommentId,
                UserId: req.user.id
            })
            res.json(newComment).status(201)
        } catch (e) {
            res.json(e.message).status(500)
        }
    }

    async allComment(req, res) {
       let allComment = await comment.findAll({})
        res.json(allComment).status(200)
    }
}


module.exports = new CommentController()