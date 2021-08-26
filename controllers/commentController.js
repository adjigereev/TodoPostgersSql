const {comment, commentOnComment} = require('../db/todo.model')

class CommentController {
    async addComment(req, res) {
        try {
            comment.create({
                description: req.body.description,
                TodoId: req.body.TodoId
            }).then((data) => res.json(data).status(201))
        } catch (e) {
            res.json(e.message).status(500)
        }
        console.log(req.body.TodoId)
    }
    allComment(req,res){
        comment.findAll({
            include: [
                {model: commentOnComment, required: false}
            ],
        }).then(data =>res.json(data))
    }

    addCommentOnComment(req, res) {
        commentOnComment.create({
            description: req.body.description,
            CommentId: req.body.CommentId
        }).then((data) => res.json(data).status(201))
            .catch(err => console.log(err))
    }


}

module.exports = new CommentController()