const {comment}= require('../db/todo.model')
class CommentController{
    async addComment (req,res){
        try {
            await  comment.create({
                description:req.body.description,
                todoId:req.body.todoId
            }).then((data)=>res.json(data).status(201))
            console.log(req.body.description)
        }catch (e){
            res.json(e.message).status(500)
        }
    }

}
module.exports = new CommentController()