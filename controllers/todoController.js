
const todos = require('../db/todo.model')

class Todos{
    async addTodo  (req,res){
       try {
        todos.create({
            name:req.body.name
        }).catch(err => console.log(err))
       } catch (error) {
           res.json(error.msg).status(500)
       }
       res.sendStatus(201)
    }
    async allTodo(req,res){
        todos.findAll({raw: true })
            .then((data)=>{
               res.json(data).status(200)
            })
    }
    async editTodo(req,res){
        const  userId = req.params.id
        const todo = await todos.findOne({where:{id:userId}})
        todos.update({payload:!todo.dataValues.payload},{where:{id:userId}}).then((data)=>res.json(data).status(200)).catch(err => console.log(err))
    }
    async deleteTodo(req,res){
        const  userId = req.params.id
        todos.destroy({where:{id:userId}}).then(()=>{
            res.sendStatus(200)
        }).catch(err => console.log(err))
    }
}

module.exports = new Todos()