let express = require('express');
let router = express.Router();
let Todos = require('../controllers/todoController')
const {checkUser,checkRestriction} = require('../middleware/authmiddleware')
const {todo}= require('../db/todo.model')
router.post('/', checkUser,Todos.addTodo);
router.get('/', Todos.allTodo);
router.put('/:id',checkUser,checkRestriction(todo), Todos.editTodo)
router.delete('/:id',checkUser,checkRestriction(todo), Todos.deleteTodo)
module.exports = router;
