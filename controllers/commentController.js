const {comment} = require('../db/todo.model')
const examination = require("../middleware/userMiddleware");

class CommentController {
    async addComment(req, res) {
        try {
            let newComment = await comment.create({
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

    async updateComment(req, res) {
        let commentId = req.params.id
            try {
                let description = req.body.description
                let updateComment = await comment.update({description: description}, {where: {id: commentId}})
                res.json(updateComment).status(200)
            } catch (e) {
                res.json(e.message).status(500)
            }
    }
    async deleteComment(req,res){
        let commentId = req.params.id
            try {
                await  comment.destroy({where:{id:commentId}})
            }catch (e) {
                res.json(e.message).status(500)
            }
            res.sendStatus(200)
    }
}


module.exports = new CommentController()